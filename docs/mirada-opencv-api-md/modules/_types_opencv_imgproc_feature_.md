**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/imgproc_feature"](_types_opencv_imgproc_feature_.md)

# External module: "types/opencv/imgproc_feature"

## Index

### Type aliases

* [HoughModes](_types_opencv_imgproc_feature_.md#houghmodes)
* [LineSegmentDetectorModes](_types_opencv_imgproc_feature_.md#linesegmentdetectormodes)

### Variables

* [HOUGH_GRADIENT](_types_opencv_imgproc_feature_.md#const-hough_gradient)
* [HOUGH_MULTI_SCALE](_types_opencv_imgproc_feature_.md#const-hough_multi_scale)
* [HOUGH_PROBABILISTIC](_types_opencv_imgproc_feature_.md#const-hough_probabilistic)
* [HOUGH_STANDARD](_types_opencv_imgproc_feature_.md#const-hough_standard)
* [LSD_REFINE_ADV](_types_opencv_imgproc_feature_.md#const-lsd_refine_adv)
* [LSD_REFINE_NONE](_types_opencv_imgproc_feature_.md#const-lsd_refine_none)
* [LSD_REFINE_STD](_types_opencv_imgproc_feature_.md#const-lsd_refine_std)

### Functions

* [Canny](_types_opencv_imgproc_feature_.md#canny)
* [HoughCircles](_types_opencv_imgproc_feature_.md#houghcircles)
* [HoughLines](_types_opencv_imgproc_feature_.md#houghlines)
* [HoughLinesP](_types_opencv_imgproc_feature_.md#houghlinesp)
* [HoughLinesPointSet](_types_opencv_imgproc_feature_.md#houghlinespointset)
* [cornerEigenValsAndVecs](_types_opencv_imgproc_feature_.md#cornereigenvalsandvecs)
* [cornerHarris](_types_opencv_imgproc_feature_.md#cornerharris)
* [cornerMinEigenVal](_types_opencv_imgproc_feature_.md#cornermineigenval)
* [cornerSubPix](_types_opencv_imgproc_feature_.md#cornersubpix)
* [createLineSegmentDetector](_types_opencv_imgproc_feature_.md#createlinesegmentdetector)
* [goodFeaturesToTrack](_types_opencv_imgproc_feature_.md#goodfeaturestotrack)
* [preCornerDetect](_types_opencv_imgproc_feature_.md#precornerdetect)

## Type aliases

###  HoughModes

Ƭ **HoughModes**: *any*

*Defined in [types/opencv/imgproc_feature.ts:558](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L558)*

___

###  LineSegmentDetectorModes

Ƭ **LineSegmentDetectorModes**: *any*

*Defined in [types/opencv/imgproc_feature.ts:560](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L560)*

## Variables

### `Const` HOUGH_GRADIENT

• **HOUGH_GRADIENT**: *[HoughModes](_types_opencv_imgproc_feature_.md#houghmodes)*

*Defined in [types/opencv/imgproc_feature.ts:545](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L545)*

___

### `Const` HOUGH_MULTI_SCALE

• **HOUGH_MULTI_SCALE**: *[HoughModes](_types_opencv_imgproc_feature_.md#houghmodes)*

*Defined in [types/opencv/imgproc_feature.ts:543](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L543)*

multi-scale variant of the classical Hough transform. The lines are encoded the same way as
HOUGH_STANDARD.

___

### `Const` HOUGH_PROBABILISTIC

• **HOUGH_PROBABILISTIC**: *[HoughModes](_types_opencv_imgproc_feature_.md#houghmodes)*

*Defined in [types/opencv/imgproc_feature.ts:536](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L536)*

probabilistic Hough transform (more efficient in case if the picture contains a few long linear
segments). It returns line segments rather than the whole line. Each segment is represented by
starting and ending points, and the matrix must be (the created sequence will be) of the CV_32SC4
type.

___

### `Const` HOUGH_STANDARD

• **HOUGH_STANDARD**: *[HoughModes](_types_opencv_imgproc_feature_.md#houghmodes)*

*Defined in [types/opencv/imgproc_feature.ts:527](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L527)*

classical or standard Hough transform. Every line is represented by two floating-point numbers
`$(\\rho, \\theta)$` , where `$\\rho$` is a distance between (0,0) point and the line, and
`$\\theta$` is the angle between x-axis and the normal to the line. Thus, the matrix must be (the
created sequence will be) of CV_32FC2 type

___

### `Const` LSD_REFINE_ADV

• **LSD_REFINE_ADV**: *[LineSegmentDetectorModes](_types_opencv_imgproc_feature_.md#linesegmentdetectormodes)*

*Defined in [types/opencv/imgproc_feature.ts:556](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L556)*

Advanced refinement. Number of false alarms is calculated, lines are refined through increase of
precision, decrement in size, etc.

___

### `Const` LSD_REFINE_NONE

• **LSD_REFINE_NONE**: *[LineSegmentDetectorModes](_types_opencv_imgproc_feature_.md#linesegmentdetectormodes)*

*Defined in [types/opencv/imgproc_feature.ts:547](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L547)*

___

### `Const` LSD_REFINE_STD

• **LSD_REFINE_STD**: *[LineSegmentDetectorModes](_types_opencv_imgproc_feature_.md#linesegmentdetectormodes)*

*Defined in [types/opencv/imgproc_feature.ts:549](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L549)*

## Functions

###  Canny

▸ **Canny**(`image`: InputArray, `edges`: OutputArray, `threshold1`: [double](_types_opencv__hacks_.md#double), `threshold2`: [double](_types_opencv__hacks_.md#double), `apertureSize?`: [int](_types_opencv__hacks_.md#int), `L2gradient?`: [bool](_types_opencv__hacks_.md#bool)): *void*

*Defined in [types/opencv/imgproc_feature.ts:26](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L26)*

The function finds edges in the input image and marks them in the output map edges using the Canny
algorithm. The smallest value between threshold1 and threshold2 is used for edge linking. The
largest value is used to find initial segments of strong edges. See

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`image` | InputArray | 8-bit input image.  |
`edges` | OutputArray | output edge map; single channels 8-bit image, which has the same size as image .  |
`threshold1` | [double](_types_opencv__hacks_.md#double) | first threshold for the hysteresis procedure.  |
`threshold2` | [double](_types_opencv__hacks_.md#double) | second threshold for the hysteresis procedure.  |
`apertureSize?` | [int](_types_opencv__hacks_.md#int) | aperture size for the Sobel operator.  |
`L2gradient?` | [bool](_types_opencv__hacks_.md#bool) | a flag, indicating whether a more accurate $L_2$ norm $=\sqrt{(dI/dx)^2 + (dI/dy)^2}$ should be used to calculate the image gradient magnitude ( L2gradient=true ), or whether the default $L_1$ norm $=|dI/dx|+|dI/dy|$ is enough ( L2gradient=false ).  |

**Returns:** *void*

▸ **Canny**(`dx`: InputArray, `dy`: InputArray, `edges`: OutputArray, `threshold1`: [double](_types_opencv__hacks_.md#double), `threshold2`: [double](_types_opencv__hacks_.md#double), `L2gradient?`: [bool](_types_opencv__hacks_.md#bool)): *void*

*Defined in [types/opencv/imgproc_feature.ts:48](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L48)*

This is an overloaded member function, provided for convenience. It differs from the above function
only in what argument(s) it accepts.

Finds edges in an image using the Canny algorithm with custom image gradient.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dx` | InputArray | 16-bit x derivative of input image (CV_16SC1 or CV_16SC3).  |
`dy` | InputArray | 16-bit y derivative of input image (same type as dx).  |
`edges` | OutputArray | output edge map; single channels 8-bit image, which has the same size as image .  |
`threshold1` | [double](_types_opencv__hacks_.md#double) | first threshold for the hysteresis procedure.  |
`threshold2` | [double](_types_opencv__hacks_.md#double) | second threshold for the hysteresis procedure.  |
`L2gradient?` | [bool](_types_opencv__hacks_.md#bool) | a flag, indicating whether a more accurate $L_2$ norm $=\sqrt{(dI/dx)^2 + (dI/dy)^2}$ should be used to calculate the image gradient magnitude ( L2gradient=true ), or whether the default $L_1$ norm $=|dI/dx|+|dI/dy|$ is enough ( L2gradient=false ).  |

**Returns:** *void*

___

###  HoughCircles

▸ **HoughCircles**(`image`: InputArray, `circles`: OutputArray, `method`: [int](_types_opencv__hacks_.md#int), `dp`: [double](_types_opencv__hacks_.md#double), `minDist`: [double](_types_opencv__hacks_.md#double), `param1?`: [double](_types_opencv__hacks_.md#double), `param2?`: [double](_types_opencv__hacks_.md#double), `minRadius?`: [int](_types_opencv__hacks_.md#int), `maxRadius?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_feature.ts:324](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L324)*

The function finds circles in a grayscale image using a modification of the Hough transform.

Example: :

```cpp
#include <opencv2/imgproc.hpp>
#include <opencv2/highgui.hpp>
#include <math.h>

using namespace cv;
using namespace std;

int main(int argc, char** argv)
{
    Mat img, gray;
    if( argc != 2 || !(img=imread(argv[1], 1)).data)
        return -1;
    cvtColor(img, gray, COLOR_BGR2GRAY);
    // smooth it, otherwise a lot of false circles may be detected
    GaussianBlur( gray, gray, Size(9, 9), 2, 2 );
    vector<Vec3f> circles;
    HoughCircles(gray, circles, HOUGH_GRADIENT,
                 2, gray.rows/4, 200, 100 );
    for( size_t i = 0; i < circles.size(); i++ )
    {
         Point center(cvRound(circles[i][0]), cvRound(circles[i][1]));
         int radius = cvRound(circles[i][2]);
         // draw the circle center
         circle( img, center, 3, Scalar(0,255,0), -1, 8, 0 );
         // draw the circle outline
         circle( img, center, radius, Scalar(0,0,255), 3, 8, 0 );
    }
    namedWindow( "circles", 1 );
    imshow( "circles", img );

    waitKey(0);
    return 0;
}
```

Usually the function detects the centers of circles well. However, it may fail to find correct
radii. You can assist to the function by specifying the radius range ( minRadius and maxRadius ) if
you know it. Or, you may set maxRadius to a negative number to return centers only without radius
search, and find the correct radius using an additional procedure.

[fitEllipse], [minEnclosingCircle]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`image` | InputArray | 8-bit, single-channel, grayscale input image.  |
`circles` | OutputArray | Output vector of found circles. Each vector is encoded as 3 or 4 element floating-point vector $(x, y, radius)$ or $(x, y, radius, votes)$ .  |
`method` | [int](_types_opencv__hacks_.md#int) | Detection method, see HoughModes. Currently, the only implemented method is HOUGH_GRADIENT  |
`dp` | [double](_types_opencv__hacks_.md#double) | Inverse ratio of the accumulator resolution to the image resolution. For example, if dp=1 , the accumulator has the same resolution as the input image. If dp=2 , the accumulator has half as big width and height.  |
`minDist` | [double](_types_opencv__hacks_.md#double) | Minimum distance between the centers of the detected circles. If the parameter is too small, multiple neighbor circles may be falsely detected in addition to a true one. If it is too large, some circles may be missed.  |
`param1?` | [double](_types_opencv__hacks_.md#double) | First method-specific parameter. In case of HOUGH_GRADIENT , it is the higher threshold of the two passed to the Canny edge detector (the lower one is twice smaller).  |
`param2?` | [double](_types_opencv__hacks_.md#double) | Second method-specific parameter. In case of HOUGH_GRADIENT , it is the accumulator threshold for the circle centers at the detection stage. The smaller it is, the more false circles may be detected. Circles, corresponding to the larger accumulator values, will be returned first.  |
`minRadius?` | [int](_types_opencv__hacks_.md#int) | Minimum circle radius.  |
`maxRadius?` | [int](_types_opencv__hacks_.md#int) | Maximum circle radius. If <= 0, uses the maximum image dimension. If < 0, returns centers without finding the radius.  |

**Returns:** *void*

___

###  HoughLines

▸ **HoughLines**(`image`: InputArray, `lines`: OutputArray, `rho`: [double](_types_opencv__hacks_.md#double), `theta`: [double](_types_opencv__hacks_.md#double), `threshold`: [int](_types_opencv__hacks_.md#int), `srn?`: [double](_types_opencv__hacks_.md#double), `stn?`: [double](_types_opencv__hacks_.md#double), `min_theta?`: [double](_types_opencv__hacks_.md#double), `max_theta?`: [double](_types_opencv__hacks_.md#double)): *void*

*Defined in [types/opencv/imgproc_feature.ts:358](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L358)*

The function implements the standard or standard multi-scale Hough transform algorithm for line
detection. See  for a good explanation of Hough transform.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`image` | InputArray | 8-bit, single-channel binary source image. The image may be modified by the function.  |
`lines` | OutputArray | Output vector of lines. Each line is represented by a 2 or 3 element vector $(\rho, \theta)$ or $(\rho, \theta, \textrm{votes})$ . $\rho$ is the distance from the coordinate origin $(0,0)$ (top-left corner of the image). $\theta$ is the line rotation angle in radians ( $0 \sim \textrm{vertical line}, \pi/2 \sim \textrm{horizontal line}$ ). $\textrm{votes}$ is the value of accumulator.  |
`rho` | [double](_types_opencv__hacks_.md#double) | Distance resolution of the accumulator in pixels.  |
`theta` | [double](_types_opencv__hacks_.md#double) | Angle resolution of the accumulator in radians.  |
`threshold` | [int](_types_opencv__hacks_.md#int) | Accumulator threshold parameter. Only those lines are returned that get enough votes ( $>\texttt{threshold}$ ).  |
`srn?` | [double](_types_opencv__hacks_.md#double) | For the multi-scale Hough transform, it is a divisor for the distance resolution rho . The coarse accumulator distance resolution is rho and the accurate accumulator resolution is rho/srn . If both srn=0 and stn=0 , the classical Hough transform is used. Otherwise, both these parameters should be positive.  |
`stn?` | [double](_types_opencv__hacks_.md#double) | For the multi-scale Hough transform, it is a divisor for the distance resolution theta.  |
`min_theta?` | [double](_types_opencv__hacks_.md#double) | For standard and multi-scale Hough transform, minimum angle to check for lines. Must fall between 0 and max_theta.  |
`max_theta?` | [double](_types_opencv__hacks_.md#double) | For standard and multi-scale Hough transform, maximum angle to check for lines. Must fall between min_theta and CV_PI.  |

**Returns:** *void*

___

###  HoughLinesP

▸ **HoughLinesP**(`image`: InputArray, `lines`: OutputArray, `rho`: [double](_types_opencv__hacks_.md#double), `theta`: [double](_types_opencv__hacks_.md#double), `threshold`: [int](_types_opencv__hacks_.md#int), `minLineLength?`: [double](_types_opencv__hacks_.md#double), `maxLineGap?`: [double](_types_opencv__hacks_.md#double)): *void*

*Defined in [types/opencv/imgproc_feature.ts:422](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L422)*

The function implements the probabilistic Hough transform algorithm for line detection, described in
Matas00

See the line detection example below:

```cpp
#include <opencv2/imgproc.hpp>
#include <opencv2/highgui.hpp>

using namespace cv;
using namespace std;

int main(int argc, char** argv)
{
    Mat src, dst, color_dst;
    if( argc != 2 || !(src=imread(argv[1], 0)).data)
        return -1;

    Canny( src, dst, 50, 200, 3 );
    cvtColor( dst, color_dst, COLOR_GRAY2BGR );

    vector<Vec4i> lines;
    HoughLinesP( dst, lines, 1, CV_PI/180, 80, 30, 10 );
    for( size_t i = 0; i < lines.size(); i++ )
    {
        line( color_dst, Point(lines[i][0], lines[i][1]),
        Point( lines[i][2], lines[i][3]), Scalar(0,0,255), 3, 8 );
    }
    namedWindow( "Source", 1 );
    imshow( "Source", src );

    namedWindow( "Detected Lines", 1 );
    imshow( "Detected Lines", color_dst );

    waitKey(0);
    return 0;
}
```

 This is a sample picture the function parameters have been tuned for:

 And this is the output of the above program in case of the probabilistic Hough transform:

[LineSegmentDetector]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`image` | InputArray | 8-bit, single-channel binary source image. The image may be modified by the function.  |
`lines` | OutputArray | Output vector of lines. Each line is represented by a 4-element vector $(x_1, y_1, x_2, y_2)$ , where $(x_1,y_1)$ and $(x_2, y_2)$ are the ending points of each detected line segment.  |
`rho` | [double](_types_opencv__hacks_.md#double) | Distance resolution of the accumulator in pixels.  |
`theta` | [double](_types_opencv__hacks_.md#double) | Angle resolution of the accumulator in radians.  |
`threshold` | [int](_types_opencv__hacks_.md#int) | Accumulator threshold parameter. Only those lines are returned that get enough votes ( $>\texttt{threshold}$ ).  |
`minLineLength?` | [double](_types_opencv__hacks_.md#double) | Minimum line length. Line segments shorter than that are rejected.  |
`maxLineGap?` | [double](_types_opencv__hacks_.md#double) | Maximum allowed gap between points on the same line to link them.  |

**Returns:** *void*

___

###  HoughLinesPointSet

▸ **HoughLinesPointSet**(`_point`: InputArray, `_lines`: OutputArray, `lines_max`: [int](_types_opencv__hacks_.md#int), `threshold`: [int](_types_opencv__hacks_.md#int), `min_rho`: [double](_types_opencv__hacks_.md#double), `max_rho`: [double](_types_opencv__hacks_.md#double), `rho_step`: [double](_types_opencv__hacks_.md#double), `min_theta`: [double](_types_opencv__hacks_.md#double), `max_theta`: [double](_types_opencv__hacks_.md#double), `theta_step`: [double](_types_opencv__hacks_.md#double)): *void*

*Defined in [types/opencv/imgproc_feature.ts:488](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L488)*

The function finds lines in a set of points using a modification of the Hough transform.

```cpp
#include <opencv2/core.hpp>
#include <opencv2/imgproc.hpp>

using namespace cv;
using namespace std;

int main()
{
    Mat lines;
    vector<Vec3d> line3d;
    vector<Point2f> point;
    const static float Points[20][2] = {
    { 0.0f,   369.0f }, { 10.0f,  364.0f }, { 20.0f,  358.0f }, { 30.0f,  352.0f },
    { 40.0f,  346.0f }, { 50.0f,  341.0f }, { 60.0f,  335.0f }, { 70.0f,  329.0f },
    { 80.0f,  323.0f }, { 90.0f,  318.0f }, { 100.0f, 312.0f }, { 110.0f, 306.0f },
    { 120.0f, 300.0f }, { 130.0f, 295.0f }, { 140.0f, 289.0f }, { 150.0f, 284.0f },
    { 160.0f, 277.0f }, { 170.0f, 271.0f }, { 180.0f, 266.0f }, { 190.0f, 260.0f }
    };

    for (int i = 0; i < 20; i++)
    {
        point.push_back(Point2f(Points[i][0],Points[i][1]));
    }

    double rhoMin = 0.0f, rhoMax = 360.0f, rhoStep = 1;
    double thetaMin = 0.0f, thetaMax = CV_PI / 2.0f, thetaStep = CV_PI / 180.0f;

    HoughLinesPointSet(point, lines, 20, 1,
                       rhoMin, rhoMax, rhoStep,
                       thetaMin, thetaMax, thetaStep);

    lines.copyTo(line3d);
    printf("votes:%d, rho:%.7f, theta:%.7f\\n",(int)line3d.at(0).val[0], line3d.at(0).val[1],
line3d.at(0).val[2]);
}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`_point` | InputArray | Input vector of points. Each vector must be encoded as a Point vector $(x,y)$. Type must be CV_32FC2 or CV_32SC2.  |
`_lines` | OutputArray | Output vector of found lines. Each vector is encoded as a vector<Vec3d> $(votes, rho, theta)$. The larger the value of 'votes', the higher the reliability of the Hough line.  |
`lines_max` | [int](_types_opencv__hacks_.md#int) | Max count of hough lines.  |
`threshold` | [int](_types_opencv__hacks_.md#int) | Accumulator threshold parameter. Only those lines are returned that get enough votes ( $>\texttt{threshold}$ )  |
`min_rho` | [double](_types_opencv__hacks_.md#double) | Minimum Distance value of the accumulator in pixels.  |
`max_rho` | [double](_types_opencv__hacks_.md#double) | Maximum Distance value of the accumulator in pixels.  |
`rho_step` | [double](_types_opencv__hacks_.md#double) | Distance resolution of the accumulator in pixels.  |
`min_theta` | [double](_types_opencv__hacks_.md#double) | Minimum angle value of the accumulator in radians.  |
`max_theta` | [double](_types_opencv__hacks_.md#double) | Maximum angle value of the accumulator in radians.  |
`theta_step` | [double](_types_opencv__hacks_.md#double) | Angle resolution of the accumulator in radians.  |

**Returns:** *void*

___

###  cornerEigenValsAndVecs

▸ **cornerEigenValsAndVecs**(`src`: InputArray, `dst`: OutputArray, `blockSize`: [int](_types_opencv__hacks_.md#int), `ksize`: [int](_types_opencv__hacks_.md#int), `borderType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_feature.ts:81](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L81)*

For every pixel `$p$` , the function cornerEigenValsAndVecs considers a blockSize `$\\times$`
blockSize neighborhood `$S(p)$` . It calculates the covariation matrix of derivatives over the
neighborhood as:

`\\[M = \\begin{bmatrix} \\sum _{S(p)}(dI/dx)^2 & \\sum _{S(p)}dI/dx dI/dy \\\\ \\sum _{S(p)}dI/dx
dI/dy & \\sum _{S(p)}(dI/dy)^2 \\end{bmatrix}\\]`

where the derivatives are computed using the Sobel operator.

After that, it finds eigenvectors and eigenvalues of `$M$` and stores them in the destination image
as `$(\\lambda_1, \\lambda_2, x_1, y_1, x_2, y_2)$` where

`$\\lambda_1, \\lambda_2$` are the non-sorted eigenvalues of `$M$`
`$x_1, y_1$` are the eigenvectors corresponding to `$\\lambda_1$`
`$x_2, y_2$` are the eigenvectors corresponding to `$\\lambda_2$`

The output of the function can be used for robust edge or corner detection.

[cornerMinEigenVal], [cornerHarris], [preCornerDetect]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | InputArray | Input single-channel 8-bit or floating-point image.  |
`dst` | OutputArray | Image to store the results. It has the same size as src and the type CV_32FC(6) .  |
`blockSize` | [int](_types_opencv__hacks_.md#int) | Neighborhood size (see details below).  |
`ksize` | [int](_types_opencv__hacks_.md#int) | Aperture parameter for the Sobel operator.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | Pixel extrapolation method. See BorderTypes.  |

**Returns:** *void*

___

###  cornerHarris

▸ **cornerHarris**(`src`: InputArray, `dst`: OutputArray, `blockSize`: [int](_types_opencv__hacks_.md#int), `ksize`: [int](_types_opencv__hacks_.md#int), `k`: [double](_types_opencv__hacks_.md#double), `borderType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_feature.ts:107](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L107)*

The function runs the Harris corner detector on the image. Similarly to cornerMinEigenVal and
cornerEigenValsAndVecs , for each pixel `$(x, y)$` it calculates a `$2\\times2$` gradient covariance
matrix `$M^{(x,y)}$` over a `$\\texttt{blockSize} \\times \\texttt{blockSize}$` neighborhood. Then,
it computes the following characteristic:

`\\[\\texttt{dst} (x,y) = \\mathrm{det} M^{(x,y)} - k \\cdot \\left ( \\mathrm{tr} M^{(x,y)} \\right
)^2\\]`

Corners in the image can be found as the local maxima of this response map.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | InputArray | Input single-channel 8-bit or floating-point image.  |
`dst` | OutputArray | Image to store the Harris detector responses. It has the type CV_32FC1 and the same size as src .  |
`blockSize` | [int](_types_opencv__hacks_.md#int) | Neighborhood size (see the details on cornerEigenValsAndVecs ).  |
`ksize` | [int](_types_opencv__hacks_.md#int) | Aperture parameter for the Sobel operator.  |
`k` | [double](_types_opencv__hacks_.md#double) | Harris detector free parameter. See the formula above.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | Pixel extrapolation method. See BorderTypes.  |

**Returns:** *void*

___

###  cornerMinEigenVal

▸ **cornerMinEigenVal**(`src`: InputArray, `dst`: OutputArray, `blockSize`: [int](_types_opencv__hacks_.md#int), `ksize?`: [int](_types_opencv__hacks_.md#int), `borderType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_feature.ts:125](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L125)*

The function is similar to cornerEigenValsAndVecs but it calculates and stores only the minimal
eigenvalue of the covariance matrix of derivatives, that is, `$\\min(\\lambda_1, \\lambda_2)$` in
terms of the formulae in the cornerEigenValsAndVecs description.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | InputArray | Input single-channel 8-bit or floating-point image.  |
`dst` | OutputArray | Image to store the minimal eigenvalues. It has the type CV_32FC1 and the same size as src .  |
`blockSize` | [int](_types_opencv__hacks_.md#int) | Neighborhood size (see the details on cornerEigenValsAndVecs ).  |
`ksize?` | [int](_types_opencv__hacks_.md#int) | Aperture parameter for the Sobel operator.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | Pixel extrapolation method. See BorderTypes.  |

**Returns:** *void*

___

###  cornerSubPix

▸ **cornerSubPix**(`image`: InputArray, `corners`: InputOutputArray, `winSize`: [Size](../classes/_types_opencv__hacks_.size.md), `zeroZone`: [Size](../classes/_types_opencv__hacks_.size.md), `criteria`: [TermCriteria](../classes/_types_opencv__hacks_.termcriteria.md)): *void*

*Defined in [types/opencv/imgproc_feature.ts:167](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L167)*

The function iterates to find the sub-pixel accurate location of corners or radial saddle points, as
shown on the figure below.

 Sub-pixel accurate corner locator is based on the observation that every vector from the center
`$q$` to a point `$p$` located within a neighborhood of `$q$` is orthogonal to the image gradient at
`$p$` subject to image and measurement noise. Consider the expression:

`\\[\\epsilon _i = {DI_{p_i}}^T \\cdot (q - p_i)\\]`

where `${DI_{p_i}}$` is an image gradient at one of the points `$p_i$` in a neighborhood of `$q$` .
The value of `$q$` is to be found so that `$\\epsilon_i$` is minimized. A system of equations may be
set up with `$\\epsilon_i$` set to zero:

`\\[\\sum _i(DI_{p_i} \\cdot {DI_{p_i}}^T) \\cdot q - \\sum _i(DI_{p_i} \\cdot {DI_{p_i}}^T \\cdot
p_i)\\]`

where the gradients are summed within a neighborhood ("search window") of `$q$` . Calling the first
gradient term `$G$` and the second gradient term `$b$` gives:

`\\[q = G^{-1} \\cdot b\\]`

The algorithm sets the center of the neighborhood window at this new center `$q$` and then iterates
until the center stays within a set threshold.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`image` | InputArray | Input single-channel, 8-bit or float image.  |
`corners` | InputOutputArray | Initial coordinates of the input corners and refined coordinates provided for output.  |
`winSize` | [Size](../classes/_types_opencv__hacks_.size.md) | Half of the side length of the search window. For example, if winSize=Size(5,5) , then a $(5*2+1) \times (5*2+1) = 11 \times 11$ search window is used.  |
`zeroZone` | [Size](../classes/_types_opencv__hacks_.size.md) | Half of the size of the dead region in the middle of the search zone over which the summation in the formula below is not done. It is used sometimes to avoid possible singularities of the autocorrelation matrix. The value of (-1,-1) indicates that there is no such a size.  |
`criteria` | [TermCriteria](../classes/_types_opencv__hacks_.termcriteria.md) | Criteria for termination of the iterative process of corner refinement. That is, the process of corner position refinement stops either after criteria.maxCount iterations or when the corner position moves by less than criteria.epsilon on some iteration.  |

**Returns:** *void*

___

###  createLineSegmentDetector

▸ **createLineSegmentDetector**(`_refine?`: [int](_types_opencv__hacks_.md#int), `_scale?`: [double](_types_opencv__hacks_.md#double), `_sigma_scale?`: [double](_types_opencv__hacks_.md#double), `_quant?`: [double](_types_opencv__hacks_.md#double), `_ang_th?`: [double](_types_opencv__hacks_.md#double), `_log_eps?`: [double](_types_opencv__hacks_.md#double), `_density_th?`: [double](_types_opencv__hacks_.md#double), `_n_bins?`: [int](_types_opencv__hacks_.md#int)): *any*

*Defined in [types/opencv/imgproc_feature.ts:192](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L192)*

The [LineSegmentDetector] algorithm is defined using the standard values. Only advanced users may
want to edit those, as to tailor it for their own application.

Implementation has been removed due original code license conflict

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`_refine?` | [int](_types_opencv__hacks_.md#int) | The way found lines will be refined, see LineSegmentDetectorModes  |
`_scale?` | [double](_types_opencv__hacks_.md#double) | The scale of the image that will be used to find the lines. Range (0..1].  |
`_sigma_scale?` | [double](_types_opencv__hacks_.md#double) | Sigma for Gaussian filter. It is computed as sigma = _sigma_scale/_scale.  |
`_quant?` | [double](_types_opencv__hacks_.md#double) | Bound to the quantization error on the gradient norm.  |
`_ang_th?` | [double](_types_opencv__hacks_.md#double) | Gradient angle tolerance in degrees.  |
`_log_eps?` | [double](_types_opencv__hacks_.md#double) | Detection threshold: -log10(NFA) > log_eps. Used only when advance refinement is chosen.  |
`_density_th?` | [double](_types_opencv__hacks_.md#double) | Minimal density of aligned region points in the enclosing rectangle.  |
`_n_bins?` | [int](_types_opencv__hacks_.md#int) | Number of bins in pseudo-ordering of gradient modulus.  |

**Returns:** *any*

___

###  goodFeaturesToTrack

▸ **goodFeaturesToTrack**(`image`: InputArray, `corners`: OutputArray, `maxCorners`: [int](_types_opencv__hacks_.md#int), `qualityLevel`: [double](_types_opencv__hacks_.md#double), `minDistance`: [double](_types_opencv__hacks_.md#double), `mask?`: InputArray, `blockSize?`: [int](_types_opencv__hacks_.md#int), `useHarrisDetector?`: [bool](_types_opencv__hacks_.md#bool), `k?`: [double](_types_opencv__hacks_.md#double)): *void*

*Defined in [types/opencv/imgproc_feature.ts:244](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L244)*

The function finds the most prominent corners in the image or in the specified image region, as
described in Shi94

Function calculates the corner quality measure at every source image pixel using the
[cornerMinEigenVal] or [cornerHarris] .
Function performs a non-maximum suppression (the local maximums in *3 x 3* neighborhood are
retained).
The corners with the minimal eigenvalue less than `$\\texttt{qualityLevel} \\cdot \\max_{x,y}
qualityMeasureMap(x,y)$` are rejected.
The remaining corners are sorted by the quality measure in the descending order.
Function throws away each corner for which there is a stronger corner at a distance less than
maxDistance.

The function can be used to initialize a point-based tracker of an object.

If the function is called with different values A and B of the parameter qualityLevel , and A > B,
the vector of returned corners with qualityLevel=A will be the prefix of the output vector with
qualityLevel=B .

[cornerMinEigenVal], [cornerHarris], [calcOpticalFlowPyrLK], [estimateRigidTransform],

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`image` | InputArray | Input 8-bit or floating-point 32-bit, single-channel image.  |
`corners` | OutputArray | Output vector of detected corners.  |
`maxCorners` | [int](_types_opencv__hacks_.md#int) | Maximum number of corners to return. If there are more corners than are found, the strongest of them is returned. maxCorners <= 0 implies that no limit on the maximum is set and all detected corners are returned.  |
`qualityLevel` | [double](_types_opencv__hacks_.md#double) | Parameter characterizing the minimal accepted quality of image corners. The parameter value is multiplied by the best corner quality measure, which is the minimal eigenvalue (see cornerMinEigenVal ) or the Harris function response (see cornerHarris ). The corners with the quality measure less than the product are rejected. For example, if the best corner has the quality measure = 1500, and the qualityLevel=0.01 , then all the corners with the quality measure less than 15 are rejected.  |
`minDistance` | [double](_types_opencv__hacks_.md#double) | Minimum possible Euclidean distance between the returned corners.  |
`mask?` | InputArray | Optional region of interest. If the image is not empty (it needs to have the type CV_8UC1 and the same size as image ), it specifies the region in which the corners are detected.  |
`blockSize?` | [int](_types_opencv__hacks_.md#int) | Size of an average block for computing a derivative covariation matrix over each pixel neighborhood. See cornerEigenValsAndVecs .  |
`useHarrisDetector?` | [bool](_types_opencv__hacks_.md#bool) | Parameter indicating whether to use a Harris detector (see cornerHarris) or cornerMinEigenVal.  |
`k?` | [double](_types_opencv__hacks_.md#double) | Free parameter of the Harris detector.  |

**Returns:** *void*

▸ **goodFeaturesToTrack**(`image`: InputArray, `corners`: OutputArray, `maxCorners`: [int](_types_opencv__hacks_.md#int), `qualityLevel`: [double](_types_opencv__hacks_.md#double), `minDistance`: [double](_types_opencv__hacks_.md#double), `mask`: InputArray, `blockSize`: [int](_types_opencv__hacks_.md#int), `gradientSize`: [int](_types_opencv__hacks_.md#int), `useHarrisDetector?`: [bool](_types_opencv__hacks_.md#bool), `k?`: [double](_types_opencv__hacks_.md#double)): *void*

*Defined in [types/opencv/imgproc_feature.ts:246](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L246)*

**Parameters:**

Name | Type |
------ | ------ |
`image` | InputArray |
`corners` | OutputArray |
`maxCorners` | [int](_types_opencv__hacks_.md#int) |
`qualityLevel` | [double](_types_opencv__hacks_.md#double) |
`minDistance` | [double](_types_opencv__hacks_.md#double) |
`mask` | InputArray |
`blockSize` | [int](_types_opencv__hacks_.md#int) |
`gradientSize` | [int](_types_opencv__hacks_.md#int) |
`useHarrisDetector?` | [bool](_types_opencv__hacks_.md#bool) |
`k?` | [double](_types_opencv__hacks_.md#double) |

**Returns:** *void*

___

###  preCornerDetect

▸ **preCornerDetect**(`src`: InputArray, `dst`: OutputArray, `ksize`: [int](_types_opencv__hacks_.md#int), `borderType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_feature.ts:518](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_feature.ts#L518)*

The function calculates the complex spatial derivative-based function of the source image

`\\[\\texttt{dst} = (D_x \\texttt{src} )^2 \\cdot D_{yy} \\texttt{src} + (D_y \\texttt{src} )^2
\\cdot D_{xx} \\texttt{src} - 2 D_x \\texttt{src} \\cdot D_y \\texttt{src} \\cdot D_{xy}
\\texttt{src}\\]`

where `$D_x$`, `$D_y$` are the first image derivatives, `$D_{xx}$`, `$D_{yy}$` are the second image
derivatives, and `$D_{xy}$` is the mixed derivative.

The corners can be found as local maximums of the functions, as shown below:

```cpp
Mat corners, dilated_corners;
preCornerDetect(image, corners, 3);
// dilation with 3x3 rectangular structuring element
dilate(corners, dilated_corners, Mat(), 1);
Mat corner_mask = corners == dilated_corners;
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | InputArray | Source single-channel 8-bit of floating-point image.  |
`dst` | OutputArray | Output image that has the type CV_32F and the same size as src .  |
`ksize` | [int](_types_opencv__hacks_.md#int) | Aperture size of the Sobel .  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | Pixel extrapolation method. See BorderTypes.  |

**Returns:** *void*