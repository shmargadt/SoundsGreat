from Tkinter import*
root = Tk()
frame = Frame(root)
frame.pack()
def callback(event):
    print "You Pressed it!"


print("Press a key (Escape key to exit): ")
root.bind('<Key>', callback)
# don't show the tk window
# frame.focus_set()
# root.withdraw()


frame.mainloop()
