import random

def get_random_int(min, max):
    print(random.randint(min, max))

def generation_random_price(count, min, max):
    for i in range(count):
        get_random_int(min, max)

if __name__ == "__main__":
    generation_random_price(10, 100000, 200000)