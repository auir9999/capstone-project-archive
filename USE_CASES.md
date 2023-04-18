## Creating a Team on Team Builder (Done by Ryan W)

### Actor (User)

User with a valid account that has been registered into the system.

### Pre-conditions

The user must be logged into the system.

### Main Flow

1. The user must select Team Builder on the website’s sidebar.
2. The system loads up team builder page
3. The user must select the create new team comp option
4. The system loads up team builder creation page
5. The user must add all characters, equipment, team composition type and optionally the stages applicable
6. The user hits the save team option
7. The system saves the build into the user’s saved team compositions and returns back to step 2

### Alternate Flow

- If user clicks cancel at step 5:
    - System redirects them to step 2
- If the user selects the reset option or refreshes page:
    - clears all data and sets them back the empty template at step 5
- If the user attempts to save with invalid details (no characters) or no team composition type specified at step 5:
    - System prevents redirection, preventing them from saving this build and prompts them to add required data

### Post Condition

After the system has successfully saved the user's build into user data, it will now be also displayed onto both user’s team builder page, profile’s “team comps” and may also be displayed in team list page if the optional detail (stages applicable) is added.

## Using Roll Simulator Function (Done by Ian H)

### Action (User)

User with a valid account that has been registered into the system

### Preconditions

User must be logged into the system

### Main Flow

1. The user clicks on the Roll Simulator tab on the website

2. The system loads the roll simulator function on a new page

3. The user would need to choose which banner that they want to roll on (either a specific Character Banner or Equipment Banner)
    - If Character Banner is chosen, these are the options: first free pull (11 units, guarantee 5* unit), free multi (11 units), paid multi (11 units), single pull (1 unit), and alch pulls (use 10000 or 5000 alch, depending on banner to get 1 5* unit)
    - If Equipment Banner is chosen, these are the options: single pull (1 equipment), multi pull (11 equipments)
    
4. The user chooses which pull method they want to do

5. The user will know see what kind of units / equipments they rolled

6. The system will save the rolls into the database

7. The user can decide if they want to reroll, choose a different pull method, different banner or leave the Roll Simulator page

### Alternate Flows
  - If a user does not actually want to use the roll simulator
      - At step 3, the user can decide if they actually wanna roll for themselves, but if they are in a hurry they can just view past rolls that have been done by past users (there will be a button for this view function on the Roll Simulator tab)
  - If a user accidentally picks the wrong banner or pull method
      - At steps 3 or 4, the user can easily go back to the previous screen and choose their right banner / pull method

### Postconditions

After a user has successfully used the roll simulator, the database gets updated with the rolls the users have done, so that future users can see what type of characters or equipment that got rolled and what they can expect when they actually do it in game. 

## Look up rewards for a dungeon level (Done by Bo Wei Yao)

### Actor (User)

A player who plays Grand Summoner.

### Pre-conditions

The user is on the page containing list of dungeons.

### Main Flow

1. The user enters a level range in the level filter.
2. The system narrows the list of dungeons down to the ones that match the level range.
3. The user selects a dungeon level.
4. The system displays the details page for the selected dungeon level.
5. The user views the rewards for the selected dungeon level.

### Alternate Flow

- at step 1, instead of entering a level range, the user enters keywords in the search bar:
    - The system narrows the list of dungeons down to the ones that match the keywords entered.

- at step 1, instead of using filtering, the user scrolls down the page and select a dungeon level:
    - The system displays the details page for the selected dungeon level.

### Post Condition

The user is on the details page for the selected dungeon level.
