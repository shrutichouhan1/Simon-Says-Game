import random

# List of possible commands
commands = ["Jump", "Clap", "Spin", "Dance", "Run"]

# Function to generate a command
def get_command():
    return random.choice(commands)

# Function to run the game
def play_game():
    print("Welcome to Simon Says!")
    print("You need to follow cyeommands starting with 'Simon says'.")
    print("If Simon doesn't say it, don't do it!")
    
    level = 0  # Starting the game from level 1
    while True:
        level += 1
        print(f"\nLevel {level}:")
        
        # Generate a random sequence of commands
        simon_says = random.choice([True, False])
        if simon_says:
            command = "Simon says: " + get_command()
        else:
            command = get_command()

        print(command)
        
        # Ask the player to respond
        user_input = input("Do you follow this command? (yes/no): ").lower()
        
        # Check the player's response
        if simon_says and user_input == "yes":
            print("Good job! You followed Simon's command.\n")
        elif not simon_says and user_input == "no":
            print("Good job! You didn't follow Simon's command.\n")
        else:
            print("Oops! You made a mistake. Game Over.")
            print(f"Your final score was: Level {level}")
            break  # End the game if the player makes a mistake

# Start the game
play_game()


# Welcome to Simon Says!
# You need to follow commands starting with 'Simon says'.
# If Simon doesn't say it, don't do it!

# Level 1:
# Simon says: Jump
# Do you follow this command? (yes/no): yes
# Good job! You followed Simon's command.

# Level 2:
# Clap
# Do you follow this command? (yes/no): no
# Good job! You didn't follow Simon's command.

# Level 3:
# Simon says: Dance
# Do you follow this command? (yes/no): yes
# Good job! You followed Simon's command.

# Level 4:
# Spin
# Do you follow this command? (yes/no): yes
# Oops! You made a mistake. Game Over.
# Your final score was: Level 4
