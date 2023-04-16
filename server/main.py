import cv2
import base64
import asyncio
import websockets
from fastapi import FastAPI
from starlette.websockets import WebSocket

app = FastAPI()

cap = cv2.VideoCapture(0)

async def video_stream(websocket: WebSocket):
    print("WebSocket connection established.")
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        _, buffer = cv2.imencode('.jpg', frame)
        jpg_as_text = base64.b64encode(buffer).decode('utf-8')
        await websocket.send(jpg_as_text)

@app.websocket("/video")
async def video(websocket: WebSocket):
    await video_stream(websocket)