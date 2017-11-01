#!/usr/bin/env python3
from Tkinter import*
import json
import time
import datetime

root = Tk()
D = {}

def current_position():
    return [root.winfo_pointerx(), root.winfo_pointery()]

pos1 = current_position()
while True:
   	
   time.sleep(0.5)
   pos2 = current_position()
   if not pos1 == pos2:
       # run a command:
    print datetime.datetime.now()
    D[datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")] = [root.winfo_pointerx(), root.winfo_pointery()]
    print D
    with open('mouseevents.txt', 'w') as outfile:
     json.dump(D, outfile)
   pos1 = pos2

root.mainloop()
