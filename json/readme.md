Base url is: https://drmineword.github.io/botghost/json
use: https://drmineword.github.io/botghost/json/{file_name}

In this folder you will find advanced variables to use in botghost
Its advanced json that can be too large to under normal usage be procesed by botghost

Endpoints list:

### flags_to_badges.json
Desc: Convert int (numbers) of discord user public flags to badges collection


> Requires
uniqe var: {public_flags} = int value of user flags
api block name: flags_to_badges
  >  > After execution:
{separate} = , // To conver respone into valid botghost collection
{<DISCORD BADGES UNIQE VARS WICH NAMES/EMOIJIS YOU WANT TO USE>}

> Execute
API response key: "initate"

### colorwheel.json
Desc: Random hex colors, colors type based on time of the day (based on unix)


> Requires
api block name: colorwheel

> Execute
API response key: "initate"
