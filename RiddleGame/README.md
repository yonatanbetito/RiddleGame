

```
├── index.js                    # Main entry point
├── package.json               # Project configuration
├── modeles/                   # Models layer
│   ├── Player.js             # Player entity model
│   └── Riddle.js             # Riddle entity model
├── services/                  # Business logic layer
│   ├── Game.services.js      # Game management service
│   ├── Player.services.js    # Player management service
│   └── Riddle.services.js    # Riddle management service
├── data-access/              # Data Access Layer (DAL)
│   ├── players.dal.js        # Player database operations
│   └── riddles.dal.js        # Riddle database operations
├── riddles/                  # Default riddles data
│   ├── r1.js                # Easy Math riddle
│   ├── r2.js                # Mystery riddle
│   └── r3.js                # Hard riddle
└── DB/                      # Database files
    ├── db.players.txt       # Players database (JSON format)
    └── db.riddles.txt       # Riddles database (JSON format)