#!/usr/bin/env python3

import subprocess
import sys
import json
import jc


def split_message(message: str) -> tuple[str, str | None]:
    titleEnd = message.find('\n\n')
    if titleEnd > 0:
        return message[:titleEnd], message[titleEnd + 2:]
    return message, None


def transformCommit(commit: dict) -> dict:
    title, body = split_message(commit['message'])
    return {
        'id': commit['commit'],
        'hash': commit['commit'],
        'author': commit['author'],
        'authorEmail': commit['author_email'],
        'authorDate': commit['date'],
        'commitAuthor': commit['commit_by'],
        'commitEmail': commit['commit_by_email'],
        'commitDate': commit['commit_by_date'],
        'title': title,
        'body': body
    }


def main():
    transformed_data = list(map(transformCommit, get_json()))
    with open(sys.argv[1], 'w') as output:
        json.dump(transformed_data, output)


def get_json() -> list[dict]:
    gitlog_output = subprocess.check_output(['git', 'log',
                                             '--format=fuller',
                                             '--date=iso8601-strict'],
                                            text=True)
    return jc.get_parser('git-log').parse(gitlog_output)


if __name__ == '__main__':
    main()
