export const MESSAGE_TYPE = {
  //종료
  CLOSE_SOCKET_REQUEST: 9,

  // Game start (51-60)
  GAME_START_REQUEST: 51,
  GAME_START_NOTIFICATION: 52,

  // Game Play (61-90)
  ROLL_DICE_REQUEST: 61,
  ROLL_DICE_RESPONSE: 62,
  ROLL_DICE_NOTIFICATION: 63,
  MOVE_PLAYER_BOARD_REQUEST: 64,
  MOVE_PLAYER_BOARD_RESPONSE: 65,
  MOVE_PLAYER_BOARD_NOTIFICATION: 66,
  PURCHASE_TILE_REQUEST: 67,
  PURCHASE_TILE_RESPONSE: 68,
  PURCHASE_TILE_NOTIFICATION: 69,
  GAME_END_NOTIFICATION: 70,
  PURCHASE_TROPHY_REQUEST: 71,
  PURCHASE_TROPHY_RESPONSE: 72,
  PURCHASE_TROPHY_NOTIFICATION: 73,
  TILE_PENALTY_REQUEST: 74,
  TILE_PENALTY_RESPONSE: 75,
  TILE_PENALTY_NOTIFICATION: 76,
  DICE_GAME_REQUEST: 77,
  DICE_GAME_RESPONSE: 78,
  DICE_GAME_NOTIFICATION: 79,
  TURN_END_REQUEST: 80,
  TURN_END_NOTIFICATION: 81,

  // Post Game (91-100)
  BACK_TO_THE_ROOM_REQUEST: 91,
  BACK_TO_THE_ROOM_RESPONSE: 92,
  BACK_TO_THE_ROOM_NOTIFICATION: 93,

  // Mini Game (101-110)
  START_MINI_GAME_REQUEST: 101,
};