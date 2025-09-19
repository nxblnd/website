#!/usr/bin/env python3

# This script extracts latin letters IVXLCDM and their ss01 feature
# In Alegreya font these will give fancy roman numerals

import fontforge
import sys

roman_numerals = "IVXLCDM"
roman_numerals = roman_numerals + roman_numerals.lower()
roman_numerals_ss01 = [f'{letter}.ss01' for letter in roman_numerals]

input_font_file = sys.argv[1]
output_font_file = sys.argv[2]

font = fontforge.open(input_font_file)
font.selection.none()
font.selection.select(("more", None), *roman_numerals, *roman_numerals_ss01)
font.selection.invert()
font.clear()

font.generate(output_font_file)
