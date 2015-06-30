ajaxGet = (url, {success, fail})->
  # console.log url
  oReq = new XMLHttpRequest()
  oReq.onreadystatechange = ->
    return unless @readyState is 4
    if @status is 200 then success? @responseText else fail? "#{@status}: #{@statusText}"
  oReq.open 'get', url, true
  oReq.send()

debug = (location.search.match(/(?:\?|&)debug=(.*?)(?:&|$)/) || [undefined, ''])[1]
url = if debug == 'true' then '/js-sdk-signature.json?debug=true' else '/js-sdk-signature.json'

ajaxGet url, 
  success: (res)-> 
    try 
      wx.config JSON.parse res
    catch err
      return

    