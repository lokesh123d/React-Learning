import React, { useState } from 'react'
import Player from './Player';

const ScoreCardMain = () => {
    const [player1, setplayer1] = useState(true);
  return (
    <div>

{player1?<Player playerDet={'player1'}/>:<Player playerDet={'player2'}/>}
    <button onClick={()=> setplayer1(!player1)}> Change Player</button>
    </div>
  )
}

export default ScoreCardMain