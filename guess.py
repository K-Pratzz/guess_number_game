import random 
print("-----------------WELCOME TO THE GAME-----------------")
number=random.randint(1,100)

while True:
    guess=int(input("Guess a number betwenn 1 to 100: "))
    if guess==number:
        print("😊Wohoooo!!! Done")
        break
    elif guess<number:
        print("Your guess is too low, try again")
    else:
        print("Your guess is too high, try again")
print("---------------------------Thank You-------------------------------")