from itertools import combinations
# 626b34041c11143a444e1b342c0e341036592d39044a0c102505145b57030c1b0e15290a533231071f71040465221023026b
# 7a2a304a14115a311d5b4d3d320e66520a11392e124a1000621a414310014e070245350f147431150a7105142273103a4328132f01181e
# 733e334a0615513203170a263d1632100f506c3f1d18461c2015554316074e1f1c47264c257427061f71080a2273103a4328043c47
# 626b2b081412463144411e733e0574004b0237280d5b09393315004103050f2a5d6a240943272513592c4a142373153c11670534050d1e

# Transformation seems to be
# ciphertext = xor ( rot13 ( plaintext ) , key )
# Inverse transformation for a possible guess
# crib_string = rot13 ( xor ( string1, string2 ) , rot13 ( GUESS ) )
# if crib_string is readable
# key = xor ( rot13 ( crib_string ) , rot13 ( plaintext ) )


def caesar(plaintext, rot=13):
    ans = ""
    # iterate over the given text
    for i in range(len(plaintext)):
        ch = plaintext[i]
        ord_ch = ord(ch)

        # check if space is there then simply add space
        if ord_ch < 65 or (ord_ch > 90 and ord_ch < 97) or ord_ch > 122:
            ans += ch
        # check if a character is uppercase then encrypt it accordingly
        elif ch.isupper():
            ans += chr((ord(ch) + rot - 65) % 26 + 65)
        # check if a character is lowercase then encrypt it accordingly

        else:
            ans += chr((ord(ch) + rot - 97) % 26 + 97)

    return ans


def xor(hex_str1, hex_str2):
    return chr(int(hex_str1, 16) ^ int(hex_str2, 16))


def from_hex_to_string(hex_string):
    return [chr(int(hex_string[i:i+2],16)) for i in range(0, len(hex_string), 2)]


def to_hex_string(char):
    return hex(ord(char))[2:].zfill(2)


def string_xor(s1, s2, length=None):
    if length is None:
        length = len(s1)

    return "".join([to_hex_string(xor(s1[i:i+2], s2[i:i+2])) for i in range(0, length, 2)])


def string_to_hex(string):
    return "".join([to_hex_string(c) for c in string])


# ciphertext = xor ( rot13 ( plaintext ) , key )
def encrypt_attempt(text, key="abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef"):
    encoded = string_to_hex(caesar(text))
    return string_xor(encoded, key)


# crib_string = rot13 ( xor ( xor ( string1, string2 ) , rot13 ( GUESS ) ) )
def decrypt_attempt(enc1, enc2, encoded_guess):
    length = len(encoded_guess)

    mixed_enc = string_xor(string_xor(enc1, enc2, length), encoded_guess, length)
    shifted_dec = from_hex_to_string(mixed_enc)
    return caesar(shifted_dec)


def take_a_guess(encoded_strings, string_guess):
    encoded_guess = string_to_hex(caesar(string_guess))
    length = len(encoded_guess)

    for [enc1, enc2] in combinations(encoded_strings, 2):
        offset = 0

        while offset + length <= len(enc1) and offset + length <= len(enc2):
            attempt = decrypt_attempt(enc1[offset:], enc2[offset:], encoded_guess)
            print(offset, enc1, enc2)
            print(attempt)
            offset += 2


def test():
    enc1 = encrypt_attempt("this is a test")
    enc2 = encrypt_attempt("the other text")

    take_a_guess([enc1, enc2], 'text')

# test()


enc1 = "626b34041c11143a444e1b342c0e341036592d39044a0c102505145b57030c1b0e15290a533231071f71040465221023026b"
enc2 = "7a2a304a14115a311d5b4d3d320e66520a11392e124a1000621a414310014e070245350f147431150a7105142273103a4328132f01181e"
enc3 = "733e334a0615513203170a263d1632100f506c3f1d18461c2015554316074e1f1c47264c257427061f71080a2273103a4328043c47"
enc4 = "626b2b081412463144411e733e0574004b0237280d5b09393315004103050f2a5d6a240943272513592c4a142373153c11670534050d1e"


def use_key_part1():
    dec1 = ' little Bunny with a '
    dec2 = ' if he2023{cr1b_dr4gg'

    encoded1 = string_to_hex(caesar(dec1))
    encoded2 = string_to_hex(caesar(dec2))

    # Guessing that the flag is in the last string for obvious reasons
    key1 = string_xor(encoded1, enc1[16:], len(encoded1))
    key2 = string_xor(encoded2, enc4[16:], len(encoded2))

    if key1 != key2:
        raise Exception('Key does not match!')

    key_part_1 = key1

    xor1 = string_xor(enc2[16:], key_part_1, len(key_part_1))
    xor2 = string_xor(enc3[16:], key_part_1, len(key_part_1))

    print(caesar(from_hex_to_string(xor1)))
    print(caesar(from_hex_to_string(xor2)))
    # ly all of him is whit
    # t thing in the mornin



def hack():
    list = [enc1, enc2, enc3, enc4]

    # 24
    # 626b34041c11143a444e1b342c0e341036592d39044a0c102505145b57030c1b0e15290a533231071f71040465221023026b
    # 626b2b081412463144411e733e0574004b0237280d5b09393315004103050f2a5d6a240943272513592c4a142373153c11670534050d1e
    # tle Bun
    # take_a_guess(list, 'he2023{')


    # take_a_guess(list, ' little Bunny ')
    # 16 626b34041c11143a444e1b342c0e341036592d39044a0c102505145b57030c1b0e15290a533231071f71040465221023026b 626b2b081412463144411e733e0574004b0237280d5b09393315004103050f2a5d6a240943272513592c4a142373153c11670534050d1e
    # if he2023{cr1

    # 16 626b34041c11143a444e1b342c0e341036592d39044a0c102505145b57030c1b0e15290a533231071f71040465221023026b 626b2b081412463144411e733e0574004b0237280d5b09393315004103050f2a5d6a240943272513592c4a142373153c11670534050d1e
    #  if he2023{cr1b_dr4gg
    # take_a_guess(list, ' little Bunny with a ')

    # 16   little Bunny with a co
    # 16 t thing in the morning
    # 16  if he2023{cr1b_dr4ggin
    # take_a_guess(list, 'ly all of him is white ')

    # 16  little Bunny with a coa
    # 16 t thing in the morning w
    # 16  if he2023{cr1b_dr4ggin_
    # 16 ly all of him is white e
    # take_a_guess(list, ' if he2023{cr1b_dr4ggin_')

    # 16 ly all of him is white exc
    # 16 t thing in the morning whe
    # 16  if he2023{cr1b_dr4ggin_4_
    # take_a_guess(list, ' little Bunny with a coat ')

    # 16 little Bunny with a coat as s
    # 16 t thing in the morning when I
    # 16  if he2023{cr1b_dr4ggin_4_pr0f
    # take_a_guess(list, 'ly all of him is white except ')

    # 6 ave a little Bunny with a coat as s
    # 6  nearly all of him is white except
    # 6 onder if he2023{cr1b_dr4ggin_4_pr0f
    # take_a_guess(list, ' first thing in the morning when I ')

    # And nearly all of him is white except one bit
    # The first thing in the morning when I get out
    # I wonder if he2023{cr1b_dr4ggin_4_pr0fit!} is
    # take_a_guess(list, 'I have a little Bunny with a coat as soft as ')

    # And nearly all of him is white except one bit of brown
    take_a_guess(list, 'I wonder if he2023{cr1b_dr4ggin_4_pr0fit!} is the flag')


# use_key_part1()
hack()

