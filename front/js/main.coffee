
getRandom = ->
  randomArray = new Array()
  for i in [0...7]
    randomArray[i] = i+1
  randomArray.sort ->
    0.5 - Math.random()

danMu = ->
  horizontalArray = getRandom() #水平随机
  move = ["0", "1", "2", "3", "4", "1", "0", "3"]
  array = move.sort ->
    0.5 -Math.random()
  for i in [0...7]
    $(".danmu#{horizontalArray[i]}").addClass("move#{array[i]}")

setTop = ->
  top = ["2.8", "3.2", "3.4", "3.6", "3.9", "4.1", "4.5"]
  array = top.sort ->
    0.5 - Math.random()
  for i in [0...7]
    $(".danmu#{i+1}").css('top', "#{array[i]}rem")

rightAnswerList = ["c", "a", "b","d", "d","c", "c", "b", "b", "b"]

Game = 
  status: 1
  gameScore: 0
  index: @gameScore/10
  currentAnswer: ""

  reset: ->
    @gameScore = 0
    @status = 1
    currentAnswer = ""
    # $('.home-page').show()
    # setTop()

  GameResult : (index, answer)-> 
    $continue = $('.continue-page')
    $answerRight = $('.answer-right')
    $answerWrong = $('.answer-wrong')
    if rightAnswerList[index] is answer
      @gameScore += 10 
      $answerRight.show()
    else
      $answerWrong.show()
    @setShareInfo()
    $answerTip = $(".answer-tip#{@status}")
    $answerTip.show()
    $continue.show()
    $(".continue-page").addClass('bounce-in') 

    setTimeout =>
      $(".continue-page").removeClass('bounce-in') 
    , 700

  currentAnswer: (answer)->
    $(".select-#{@status}-#{answer}").addClass('big-ani')
    setTimeout =>
      @GameResult(@status-1, answer)
      $(".select-#{@status}-#{answer}").removeClass('big-ani')
    , 300
    

  setShareInfo: ()->
    switch @gameScore/10
      when 0 
        wxData.title = "我答对了0道题。被封为：学水。这碗热翔，我先干为敬！"
        wxData.desc = "学X测试：一题不对！全部做错，我容易么我……"
      when 1
        wxData.title = "我答对了1道题。被封为：学沫。耶！对了一道，然并卵……"
        wxData.desc = "学X测试：答对1题！干嘛啦！我还答对了一道呢~！ "
      when 2
        wxData.title = "我答对了2道题，被封为：学残。学残如我，专注搬砖五十年。"
        wxData.desc = "学X测试：答对2题！曾记否，偷得浮生半日闲；未曾想，专注搬砖五十年。"
      when 3
        wxData.title = "我答对了3道题。被封为：学渣。这次考试好像没过……没关系，我不caer。"
        wxData.desc = "学X测试：答对3题！考试没过？！who caers？"
      when 4
        wxData.title = "我答对了4道题。被封为：学弱。已经身体虚弱，不堪重负，求五毛钱继续谈笑风生。"
        wxData.desc = "学X测试：答对4题！每个人都会变成自己最讨厌的那种人，我就鄙视成绩好的。"
      when 5
        wxData.title = "我答对了5题。被封为：学酥。外表貌似学霸，内心呵呵哒~ 再一碰，全是渣啊！"
        wxData.desc = "学X测试：答对5题！考前我是家里一级保护动物，考完我是野生动物，分数出来我就是一害虫。"
      when 6
        wxData.title = "我答对了6题。被封为：学民。多一分浪费，少一分犯罪。"
        wxData.desc = "学X测试：答对6题！我及格我骄傲，我为国家当肥料。 "
      when 7
        wxData.title = "我答对了7题，被封为：学痞。蓝翔技校未来挖掘机带盐人就是我了！"  
        wxData.desc = "学X测试：答对7题！宁为鸡头，不为凤尾。蓝翔我来啦！"
      when 8
        wxData.title = "我答对8题，被封为“学仙”。学仙很咸，成绩差的嫉妒我，成绩好的看不上我~"
        wxData.desc = "学X测试：答对8题！学仙好，风景旧曾谙……"
      when 9
        wxData.title = "我答对9题，被封为“学魔”。麻麻咱别盯着做错的那道好吗？"
        wxData.desc = "学X测试：答对9题！大成若缺，有缺陷才会有进步。"
      when 10
        wxData.title = "我答对10题，被封为“学魔”。北大清华撕逼都怪我。"
        wxData.desc = "学X测试：10题都对！我的电话已被北大和清华的招生办打爆！ "
      else
        wxData.title = "天啦撸，快点来，这个测试又考智商又测下限哟~！"
        wxData.desc = "学X测试：no zuo no die why you try~！no try no high give me five~！"
    console.log wxData.title, wxData.desc    

wxData =
  "imgUrl" : "http://7xjz8o.com2.z0.glb.qiniucdn.com/xuex-share-icon.jpg",
  "link" : "#{location.href}",
  "desc" : '学X测试：no zuo no die why you try~！no try no high give me five~！',
  "title" : "天啦撸，快点来，这个测试又考智商又测下限哟~！"

$.get 'http://120.25.124.9:7777/wechat/jsapiconf', (data) ->
  wxData: wxData
  wx.ready ->
    # 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
    wx.onMenuShareTimeline wxData
    wx.onMenuShareAppMessage wxData
  wx.config data

$( ->
  $load = $(".loading-page")
  $home = $(".home-page")
  $start = $('.start-pos')
  $answer1 = $('.answer1')
  $chooseA = $('.chooseA')
  $chooseB = $('.chooseB')
  $chooseC = $('.chooseC')
  $chooseD = $('.chooseD')
  $con = $('.continue-page')
  $continuebtn = $('.continue-btn')
  $again = $('.play-again') 
  $shareBtn = $('.share-btn')
  $shareTip = $('.share-tip')
  $loadingCount = $('.loading-count')
  $start = $('.start')
  $bg = $('.bg')
  $downloadBtn = $('.download')
  $start.hide()
  clickTimer = 0

  loading = ->
    count = 0
    timer = setInterval =>
      count += 1
      $loadingCount.text(count)
      clearInterval(timer) if count is 100
    , 25

  init = ->
    loading()
    setTimeout =>
      $load.hide()
      $home.show()
      setTop()
      danMu()
    , 1500

    setTimeout =>
      $start.show()
      $start.addClass('start-ani')
    , 4000

  init()

  $start.on 'click', ->
    $home.hide()
    $answer1.show()
    Game.status = 1
    
  $chooseA.on 'click', ->
    Game.currentAnswer "a"
    
  $chooseB.on 'click', ->
    Game.currentAnswer "b"

  $chooseC.on 'click', ->
    Game.currentAnswer "c"

  $chooseD.on 'click', ->
    Game.currentAnswer "d"
    
  $continuebtn.on 'click', ->
    $('.continue-page').addClass('bounce-out')
    $(".answer#{Game.status}").hide()
    
    setTimeout =>
      $('.continue-page').hide()
      $(".answer-tip#{Game.status}").hide()
      $('.answer-right').hide()
      $('.answer-wrong').hide()
      $(".continue-page").removeClass('bounce-out') 
      Game.status += 1
      $(".answer#{Game.status}").show()
      if Game.status is 11
        index = Game.gameScore/10
        $('.share-page').show()
        $('.select-area').show()
        $shareResult = $(".share-result-#{index}")
        $shareResult.show()
    , 500
    
  $again.on 'click', ->
    $('.share-page').hide()
    $('.select-area').hide()
    $('.share-tip').hide()
    $bg.show()
    index = Game.gameScore/10
    $(".share-result-#{index}").hide()
    Game.reset()
    $load.show()
    init()

  $shareBtn.on 'click', ->
    $('.share-tip').show()
    $('.share-page').hide()
    $('.select-area').hide()

  $shareTip.on 'click', ->
    $('.share-tip').hide()
    $('.share-page').show()
    $('.select-area').show()

  $downloadBtn.on 'click', ->
    location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.wenba.bangbang"
)

