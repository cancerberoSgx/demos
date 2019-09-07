**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/RotatedRect"](../modules/_types_opencv_rotatedrect_.md) › [RotatedRect](_types_opencv_rotatedrect_.rotatedrect.md)

# Class: RotatedRect

Each rectangle is specified by the center point (mass center), length of each side (represented by
[Size2f](#dc/d84/group__core__basic_1gab34496d2466b5f69930ab74c70f117d4}) structure) and the
rotation angle in degrees.

The sample below demonstrates how to use [RotatedRect](#db/dd6/classcv_1_1RotatedRect}):

```cpp
    Mat test_image(200, 200, CV_8UC3, Scalar(0));
    RotatedRect rRect = RotatedRect(Point2f(100,100), Size2f(100,50), 30);

    Point2f vertices[4];
    rRect.points(vertices);
    for (int i = 0; i < 4; i++)
        line(test_image, vertices[i], vertices[(i+1)%4], Scalar(0,255,0), 2);

    Rect brect = rRect.boundingRect();
    rectangle(test_image, brect, Scalar(255,0,0), 2);

    imshow("rectangles", test_image);
    waitKey(0);
```

[CamShift](#dc/d6b/group__video__track_1gaef2bd39c8356f423124f1fe7c44d54a1}),
[fitEllipse](#d3/dc0/group__imgproc__shape_1gaf259efaad93098103d6c27b9e4900ffa}),
[minAreaRect](#d3/dc0/group__imgproc__shape_1ga3d476a3417130ae5154aea421ca7ead9}), CvBox2D

Source:
[opencv2/core/types.hpp](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/core/types.hpp#L534).

## Hierarchy

* **RotatedRect**

## Index

### Constructors

* [constructor](_types_opencv_rotatedrect_.rotatedrect.md#constructor)

### Properties

* [angle](_types_opencv_rotatedrect_.rotatedrect.md#angle)
* [center](_types_opencv_rotatedrect_.rotatedrect.md#center)
* [size](_types_opencv_rotatedrect_.rotatedrect.md#size)

### Methods

* [boundingRect](_types_opencv_rotatedrect_.rotatedrect.md#boundingrect)
* [boundingRect2f](_types_opencv_rotatedrect_.rotatedrect.md#boundingrect2f)
* [points](_types_opencv_rotatedrect_.rotatedrect.md#points)

## Constructors

###  constructor

\+ **new RotatedRect**(): *[RotatedRect](_types_opencv_rotatedrect_.rotatedrect.md)*

*Defined in [types/opencv/RotatedRect.ts:41](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/types/opencv/RotatedRect.ts#L41)*

  full constructor
  Any 3 end points of the [RotatedRect]. They must be given in order (either clockwise or
anticlockwise).

**Returns:** *[RotatedRect](_types_opencv_rotatedrect_.rotatedrect.md)*

\+ **new RotatedRect**(`center`: Point2f, `size`: Size2f, `angle`: [float](../modules/_types_opencv__hacks_.md#float)): *[RotatedRect](_types_opencv_rotatedrect_.rotatedrect.md)*

*Defined in [types/opencv/RotatedRect.ts:43](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/types/opencv/RotatedRect.ts#L43)*

  full constructor

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`center` | Point2f | The rectangle mass center.  |
`size` | Size2f | Width and height of the rectangle.  |
`angle` | [float](../modules/_types_opencv__hacks_.md#float) | The rotation angle in a clockwise direction. When the angle is 0, 90, 180, 270 etc., the rectangle becomes an up-right rectangle.  |

**Returns:** *[RotatedRect](_types_opencv_rotatedrect_.rotatedrect.md)*

\+ **new RotatedRect**(`point1`: Point2f, `point2`: Point2f, `point3`: Point2f): *[RotatedRect](_types_opencv_rotatedrect_.rotatedrect.md)*

*Defined in [types/opencv/RotatedRect.ts:55](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/types/opencv/RotatedRect.ts#L55)*

  Any 3 end points of the [RotatedRect]. They must be given in order (either clockwise or
anticlockwise).

**Parameters:**

Name | Type |
------ | ------ |
`point1` | Point2f |
`point2` | Point2f |
`point3` | Point2f |

**Returns:** *[RotatedRect](_types_opencv_rotatedrect_.rotatedrect.md)*

## Properties

###  angle

• **angle**: *[float](../modules/_types_opencv__hacks_.md#float)*

*Defined in [types/opencv/RotatedRect.ts:37](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/types/opencv/RotatedRect.ts#L37)*

___

###  center

• **center**: *Point2f*

*Defined in [types/opencv/RotatedRect.ts:39](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/types/opencv/RotatedRect.ts#L39)*

___

###  size

• **size**: *Size2f*

*Defined in [types/opencv/RotatedRect.ts:41](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/types/opencv/RotatedRect.ts#L41)*

## Methods

###  boundingRect

▸ **boundingRect**(): *[Rect](_types_opencv__hacks_.rect.md)*

*Defined in [types/opencv/RotatedRect.ts:63](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/types/opencv/RotatedRect.ts#L63)*

**Returns:** *[Rect](_types_opencv__hacks_.rect.md)*

___

###  boundingRect2f

▸ **boundingRect2f**(): *Rect_*

*Defined in [types/opencv/RotatedRect.ts:65](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/types/opencv/RotatedRect.ts#L65)*

**Returns:** *Rect_*

___

###  points

▸ **points**(`pts`: Point2f): *Point2f*

*Defined in [types/opencv/RotatedRect.ts:73](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/types/opencv/RotatedRect.ts#L73)*

  returns 4 vertices of the rectangle

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pts` | Point2f | The points array for storing rectangle vertices. The order is bottomLeft, topLeft, topRight, bottomRight.  |

**Returns:** *Point2f*