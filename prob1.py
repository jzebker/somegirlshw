from mpl_toolkits import mplot3d
import numpy as np
import math
import matplotlib.pyplot as plt

fig = plt.figure()
ax = plt.axes(projection='3d')

z = np.linspace(0, 1, 1000)
x = np.sin(10*math.pi*z)
y = np.cos(10*math.pi*z)
ax.plot3D(x,y,z, 'gray')
plt.show()