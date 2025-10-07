#!/usr/bin/env python3

import subprocess
import sys
import argparse
import pathlib
import json
import jc


def parse_arguments() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description='''
        Dumps git log into json.
        Can dump all git log or for specified file.
        If no output file is specified, dump into stdout''')
    parser.add_argument('-f', '--file', help='Get git log for provided file')
    parser.add_argument('-o', '--output', help='Set output json file path')
    return parser.parse_args()


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
    args = parse_arguments()
    transformed_data = list(map(transformCommit, get_json(args.file)))

    if args.output:
        output_path = pathlib.Path(args.output)
        output_path.parent.mkdir(parents=True, exist_ok=True)

        with output_path.open('w') as output:
            json.dump(transformed_data, output)
    else:
        json.dump(transformed_data, sys.stdout)


def get_json(path: str | None = None) -> list[dict]:
    main_git_command = ['git', 'log',
                        '--format=fuller',
                        '--date=iso8601-strict']
    git_file_path = ['--', path] if path else []

    gitlog_output = subprocess.check_output(
        main_git_command + git_file_path,
        text=True)
    return jc.get_parser('git-log').parse(gitlog_output)


if __name__ == '__main__':
    main()
