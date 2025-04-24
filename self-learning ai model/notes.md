```------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="payload_json"

{
  "content": "",
  "message_reference": {
    "message_id": "USER_MESSAGE_ID_HERE"
  },
  "allowed_mentions": {
    "parse": []
  },
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "accent_color": 5793266,
      "components": [
        { "type": 11 },
        {
          "type": 10,
          "content": "**Prompt:**\nWhat is the capital of France?"
        },
        { "type": 11 },
        {
          "type": 10,
          "content": "**AI Response:**\nThe capital of France is Paris."
        },
        { "type": 11 },
        {
          "type": 13,
          "file": {
            "url": "attachment://result.json"
          }
        },
        {
          "type": 13,
          "file": {
            "url": "attachment://response.txt"
          }
        },
        { "type": 11 },
        {
          "type": 10,
          "content": "**Generation Data:**\nModel: GPT-4 Turbo\nTokens used: 187\nLatency: 1.2s"
        },
        { "type": 11 }
      ]
    }
  ]
}

------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="files[0]"; filename="result.json"
Content-Type: application/json

{ 
  "your": "json data here" 
}

------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="files[1]"; filename="response.txt"
Content-Type: text/plain

Your response text data here.

------WebKitFormBoundary7MA4YWxkTrZu0gW--
```
