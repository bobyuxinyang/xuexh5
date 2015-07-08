// Generated by CoffeeScript 1.9.3
(function() {
  var Game, danMu, getRandom, rightAnswerList, setTop, wxData;

  getRandom = function() {
    var i, j, randomArray;
    randomArray = new Array();
    for (i = j = 0; j < 7; i = ++j) {
      randomArray[i] = i + 1;
    }
    return randomArray.sort(function() {
      return 0.5 - Math.random();
    });
  };

  danMu = function() {
    var array, horizontalArray, i, j, move, results;
    horizontalArray = getRandom();
    move = ["0", "1", "2", "3", "4", "1", "0", "3"];
    array = move.sort(function() {
      return 0.5 - Math.random();
    });
    results = [];
    for (i = j = 0; j < 7; i = ++j) {
      results.push($(".danmu" + horizontalArray[i]).addClass("move" + array[i]));
    }
    return results;
  };

  setTop = function() {
    var array, i, j, results, top;
    top = ["2.8", "3.2", "3.4", "3.6", "3.9", "4.1", "4.5"];
    array = top.sort(function() {
      return 0.5 - Math.random();
    });
    results = [];
    for (i = j = 0; j < 7; i = ++j) {
      results.push($(".danmu" + (i + 1)).css('top', array[i] + "rem"));
    }
    return results;
  };

  rightAnswerList = ["c", "a", "b", "d", "d", "c", "c", "b", "b", "b"];

  Game = {
    status: 1,
    gameScore: 0,
    index: this.gameScore / 10,
    currentAnswer: "",
    reset: function() {
      var currentAnswer;
      this.gameScore = 0;
      this.status = 1;
      return currentAnswer = "";
    },
    GameResult: function(index, answer) {
      var $answerRight, $answerTip, $answerWrong, $continue;
      $continue = $('.continue-page');
      $answerRight = $('.answer-right');
      $answerWrong = $('.answer-wrong');
      if (rightAnswerList[index] === answer) {
        this.gameScore += 10;
        $answerRight.show();
      } else {
        $answerWrong.show();
      }
      this.setShareInfo();
      $answerTip = $(".answer-tip" + this.status);
      $answerTip.show();
      $continue.show();
      $(".continue-page").addClass('bounce-in');
      return setTimeout((function(_this) {
        return function() {
          return $(".continue-page").removeClass('bounce-in');
        };
      })(this), 700);
    },
    currentAnswer: function(answer) {
      $(".select-" + this.status + "-" + answer).addClass('big-ani');
      return setTimeout((function(_this) {
        return function() {
          _this.GameResult(_this.status - 1, answer);
          return $(".select-" + _this.status + "-" + answer).removeClass('big-ani');
        };
      })(this), 300);
    },
    setShareInfo: function() {
      switch (this.gameScore / 10) {
        case 0:
          wxData.title = "我答对了0道题。被封为：学水。这碗热翔，我先干为敬！";
          wxData.desc = "学X测试：一题不对！全部做错，我容易么我……";
          break;
        case 1:
          wxData.title = "我答对了1道题。被封为：学沫。耶！对了一道，然并卵……";
          wxData.desc = "学X测试：答对1题！干嘛啦！我还答对了一道呢~！ ";
          break;
        case 2:
          wxData.title = "我答对了2道题，被封为：学残。学残如我，专注搬砖五十年。";
          wxData.desc = "学X测试：答对2题！曾记否，偷得浮生半日闲；未曾想，专注搬砖五十年。";
          break;
        case 3:
          wxData.title = "我答对了3道题。被封为：学渣。这次考试好像没过……没关系，我不caer。";
          wxData.desc = "学X测试：答对3题！考试没过？！who caers？";
          break;
        case 4:
          wxData.title = "我答对了4道题。被封为：学弱。已经身体虚弱，不堪重负，求五毛钱继续谈笑风生。";
          wxData.desc = "学X测试：答对4题！每个人都会变成自己最讨厌的那种人，我就鄙视成绩好的。";
          break;
        case 5:
          wxData.title = "我答对了5题。被封为：学酥。外表貌似学霸，内心呵呵哒~ 再一碰，全是渣啊！";
          wxData.desc = "学X测试：答对5题！考前我是家里一级保护动物，考完我是野生动物，分数出来我就是一害虫。";
          break;
        case 6:
          wxData.title = "我答对了6题。被封为：学民。多一分浪费，少一分犯罪。";
          wxData.desc = "学X测试：答对6题！我及格我骄傲，我为国家当肥料。 ";
          break;
        case 7:
          wxData.title = "我答对了7题，被封为：学痞。蓝翔技校未来挖掘机带盐人就是我了！";
          wxData.desc = "学X测试：答对7题！宁为鸡头，不为凤尾。蓝翔我来啦！";
          break;
        case 8:
          wxData.title = "我答对8题，被封为“学仙”。学仙很咸，成绩差的嫉妒我，成绩好的看不上我~";
          wxData.desc = "学X测试：答对8题！学仙好，风景旧曾谙……";
          break;
        case 9:
          wxData.title = "我答对9题，被封为“学魔”。麻麻咱别盯着做错的那道好吗？";
          wxData.desc = "学X测试：答对9题！大成若缺，有缺陷才会有进步。";
          break;
        case 10:
          wxData.title = "我答对10题，被封为“学魔”。北大清华撕逼都怪我。";
          wxData.desc = "学X测试：10题都对！我的电话已被北大和清华的招生办打爆！ ";
          break;
        default:
          wxData.title = "天啦撸，快点来，这个测试又考智商又测下限哟~！";
          wxData.desc = "学X测试：no zuo no die why you try~！no try no high give me five~！";
      }
      return console.log(wxData.title, wxData.desc);
    }
  };

  wxData = {
    "imgUrl": "http://7xjz8o.com2.z0.glb.qiniucdn.com/xuex-share-icon.jpg",
    "link": "" + location.href,
    "desc": '学X测试：no zuo no die why you try~！no try no high give me five~！',
    "title": "天啦撸，快点来，这个测试又考智商又测下限哟~！"
  };

  $(function() {
    var $again, $answer1, $bg, $chooseA, $chooseB, $chooseC, $chooseD, $con, $continuebtn, $downloadBtn, $home, $load, $loadingCount, $shareBtn, $shareTip, $start, clickTimer, init, loading;
    $load = $(".loading-page");
    $home = $(".home-page");
    $answer1 = $('.answer1');
    $chooseA = $('.chooseA');
    $chooseB = $('.chooseB');
    $chooseC = $('.chooseC');
    $chooseD = $('.chooseD');
    $con = $('.continue-page');
    $continuebtn = $('.continue-btn');
    $again = $('.play-again');
    $shareBtn = $('.share-btn');
    $shareTip = $('.share-tip');
    $loadingCount = $('.loading-count');
    $start = $('.start');
    $bg = $('.bg');
    $downloadBtn = $('.download');
    $start.hide();
    clickTimer = 0;
    $.get('http://121.42.11.68:7777/wechat/jsconfig', function(data) {
      wx.ready(function() {
        wx.onMenuShareTimeline(wxData);
        wx.onMenuShareAppMessage(wxData);
        wx.onMenuShareQQ(wxData);
        return wx.onMenuShareWeibo(wxData);
      });
      return wx.config(data);
    });
    loading = function() {
      var count, timer;
      count = 0;
      return timer = setInterval((function(_this) {
        return function() {
          count += 1;
          $loadingCount.text(count);
          if (count === 100) {
            return clearInterval(timer);
          }
        };
      })(this), 20);
    };
    init = function() {
      loading();
      setTimeout((function(_this) {
        return function() {
          $load.hide();
          $home.show();
          setTop();
          return danMu();
        };
      })(this), 2500);
      return setTimeout((function(_this) {
        return function() {
          $start.show();
          return $start.addClass('start-ani');
        };
      })(this), 4000);
    };
    init();
    $start.on('click', function() {
      $home.hide();
      $answer1.show();
      return Game.status = 1;
    });
    $chooseA.on('click', function() {
      return Game.currentAnswer("a");
    });
    $chooseB.on('click', function() {
      return Game.currentAnswer("b");
    });
    $chooseC.on('click', function() {
      return Game.currentAnswer("c");
    });
    $chooseD.on('click', function() {
      return Game.currentAnswer("d");
    });
    $continuebtn.on('click', function() {
      $('.continue-page').addClass('bounce-out');
      $(".answer" + Game.status).hide();
      return setTimeout((function(_this) {
        return function() {
          var $shareResult, index;
          $('.continue-page').hide();
          $(".answer-tip" + Game.status).hide();
          $('.answer-right').hide();
          $('.answer-wrong').hide();
          $(".continue-page").removeClass('bounce-out');
          Game.status += 1;
          $(".answer" + Game.status).show();
          if (Game.status === 11) {
            index = Game.gameScore / 10;
            $('.share-page').show();
            $('.select-area').show();
            $shareResult = $(".share-result-" + index);
            return $shareResult.show();
          }
        };
      })(this), 500);
    });
    $again.on('click', function() {
      var index;
      $('.share-page').hide();
      $('.select-area').hide();
      $('.share-tip').hide();
      $bg.show();
      index = Game.gameScore / 10;
      $(".share-result-" + index).hide();
      Game.reset();
      $load.show();
      return init();
    });
    $shareBtn.on('click', function() {
      $('.share-tip').show();
      $('.share-page').hide();
      return $('.select-area').hide();
    });
    $shareTip.on('click', function() {
      $('.share-tip').hide();
      $('.share-page').show();
      return $('.select-area').show();
    });
    return $downloadBtn.on('click', function() {
      return location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.wenba.bangbang";
    });
  });

}).call(this);
