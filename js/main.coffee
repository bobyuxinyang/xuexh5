getRandomDanmu = ->
  randomArray = new Array()
  for i in [0...7]
    randomArray[i] = i+1
  randomArray.sort ->
    0.5 - Math.random()
  count = 0
  timer = setInterval =>
    count += 1
    # console.log randomArray[count]
    $(".danmu#{randomArray[count]}").addClass("move")
    clearInterval(timer) if count is 6
  , 1000

$( ->
  $load = $(".loading-page")
  $home = $(".home-page")
  $start = $('.start-pos')

  # window.addEventListener "load", ->  
  # , false
  setTimeout =>
    $load.hide()
    $home.show()
    @getRandomDanmu()
  , 3500
 
  $start.on 'click', ->
    $home.hide()
    console.log "game-start"
)

