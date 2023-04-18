# Group_14
## Members
| Name         | Github      | Email                       | Skype                   |
| -----------  | ----------- | --------------------------- | ----------------------- |
| Ryan Wang    | auir9999    | rwang99@myseneca.ca         | live:ryanwang9999       |
| Ian Heeralal | IHeeralal   | iheeralal@myseneca.ca       | ian.heeralal2           |
| Bo Wei Yao   | ragnarokatz | bwyao@myseneca.ca           | ragnarokatx@hotmail.com |
| Henry Tran   | tran-h      | htran54@myseneca.ca         | N/A                     |

Due to circumstances - Ian and Bo Wei are no longer members of group 14.  

## Project Description

For our capstone project, we intend to make a website for a mobile game called “Grand Summoners”. The reasoning behind this is because currently there are no English websites that are easily accessible or hold any semblance of a clean information hub for this game. In addition, there are plenty of opportunities for us to integrate game specific features that are useful to the players on a day to day basis.

A strong example of our end goal would be something like this website for another game: https://aceship.github.io/AN-EN-Tags/index.html

### Components

#### Character Details
Users can create pages to contain detailed information about characters from the game, including but not limited to: name, elemental type, stats, runes, equipment, skills, abilities and level up requirement. Users may also upload images for the character portrait.

#### Character List
The characters created by the users will be listed on this page. Clicking on a character in the list takes the user to its details page. This list should be updated as the game introduces new characters. Additionally, there will be a filter for users to only see characters in their requested criteria, such as by level or by elemental type.

#### Dungeon Details
Users can create pages to contain detailed information about in game dungeon levels, including but not limited to: Boss health, boss stats, boss weapons, reward drops, minion waves, walkthrough guide and tips. Users may also upload images for the dungeon scene, boss portrait, and rewards.

#### Dungeon List
The dungeon levels created by users will be listed on this page. Clicking on a dungeon level takes the user to its details page. This list should be updated as the game introduces new dungeons and areas for exploration. Additionally, there will be a filter for users to only see dungeons in their requested criteria, such as by level, by difficulty, by rewards, etc.

#### Team Builder
Users can build teams of characters from the available pool of characters in game. Users can save the teams and share them to the public. Users may edit their own teams, but not ones created by other users. Users may also upload images for their teams.

#### Team Details
Users can view detailed information about teams on this page. Full details of each character in the team is displayed here, including stats, health, runes, equipment, skills and others. Other users may provide feedback about this team by rating it, upvoting/downvoting it, or leaving a comment. 

#### Team List
The teams created by users will be displayed on this page. Clicking on a team takes the user to its details page. This list is expected to be updated constantly as users share their creativity. Basic information is displayed here about the teams, such as name, mini portraits of all characters used in the team, what dungeon is it for, rating and popularity.

#### Roll Simulator
Users may use the roll simulator to simulate the core in game function designed for players to obtain characters in game. It is basically a dice rolling mechanism, where a character is selected randomly from the existing pool based on its probability. Generally speaking, the more powerful or rare a character is, the harder it is for a user to obtain it. For example, a user might have a chance of 60% chance to obtain a common character card, 30% for a rare card, 9% for a super rare card, and only 1% for a SSR card.

### Features

#### Authorization Levels
Two main authorization levels: regular users and admin users.

Regular users:
- May view teams, create teams, share teams, like teams, rate teams, and comment on teams
- Has execution access to roll simulator
- Can view character and dungeon pages

Admin users:
- Has access to all functions available to the regular users
- Can create and edit character and dungeon pages3
- Can delete teams
- Can ban users

#### Mobile Support
The website will be designed to support both desktop as well as mobile display, which requires some additional thinking and work. For example:
- For the desktop version, menus will always be in display, in order for the user to access them easily. 
- For the mobile version, the menu items will work like drawers, where users can pull them out when needed. The drawers can then be pushed to hide when they are no longer needed.
- Platform specific UI adjustments to the information pages in order to display them in a more efficient manner to the user.
