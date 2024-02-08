import { BRAND_NAME_ABBR } from "@/lib/constants";
// import Image from 'next/image';
import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl text-red mb-20 mt-8 font-extrabold">
      <Link href="/" className="hover:text-black transition-color duration-150 ease-out hover:ease-in">
        {/* <abbr className="font-displaycaps">{BRAND_NAME_ABBR}</abbr> */}
        {/* <abbr>{BRAND_NAME_ABBR}</abbr> */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="128" viewBox="0 0 512 128">
              <defs>
                <filter id="colored-stripes-vertical" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
                  <feTurbulence type="turbulence" baseFrequency="0.03 0" numOctaves="10" seed="3" stitchTiles="stitch" result="turbulence"/>
                  <feColorMatrix type="saturate" values="20" in="morphology1" result="colormatrix"/>
                  <feFlood flood-color="#ecff00" flood-opacity="1" result="flood"/>
                  <feComposite in="flood" in2="SourceGraphic" operator="in" result="composite"/>
                  <feComposite in="colormatrix" in2="SourceGraphic" operator="in" result="composite1"/>
                  <feMerge result="merge">
                    <feMergeNode in="composite" result="mergeNode"/>
                    <feMergeNode in="composite1" result="mergeNode1"/>
                    <feMergeNode in="composite1" result="mergeNode2"/>
                    <feMergeNode in="composite1" result="mergeNode3"/>
                    <feMergeNode in="composite1" result="mergeNode4"/>
                    <feMergeNode in="composite1" result="mergeNode5"/>
                    <feMergeNode in="composite1" result="mergeNode6"/>
                  </feMerge>
                </filter>
                <filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feTurbulence type="turbulence" baseFrequency="0.075 0.025" numOctaves="1" seed="7" stitchTiles="stitch" result="turbulence"/>
                  <feComposite in="turbulence" in2="SourceGraphic" operator="in" result="composite"/>
                  <feColorMatrix type="matrix"
                    values="1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 0 0 16.666 -2" in="composite" result="colormatrix"/>
                  <feComposite in="SourceGraphic" in2="colormatrix" operator="in" result="composite1"/>
                  <feGaussianBlur stdDeviation="3 3" in="composite1" edgeMode="none" result="blur"/>
                  <feSpecularLighting surfaceScale="2" specularConstant="1.5" specularExponent="12.5" lighting-color="#ffaa4d" in="blur" result="specularLighting">
                        <feDistantLight azimuth="-90" elevation="128"/>
                    </feSpecularLighting>
                  <feSpecularLighting surfaceScale="2" specularConstant="1.5" specularExponent="12.5" lighting-color="#ff7177" in="blur" result="specularLighting1">
                        <feDistantLight azimuth="90" elevation="128"/>
                    </feSpecularLighting>
                  <feSpecularLighting surfaceScale="7" specularConstant="1.5" specularExponent="25" lighting-color="#ecff00" in="blur" result="specularLighting2">
                        <fePointLight x="128" y="50" z="300"/>
                    </feSpecularLighting>
                  <feComposite in="specularLighting" in2="composite1" operator="in" result="composite2"/>
                  <feComposite in="specularLighting2" in2="composite1" operator="in" result="composite3"/>
                  <feComposite in="specularLighting1" in2="composite1" operator="in" result="composite4"/>
                  <feBlend mode="multiply" in="composite4" in2="SourceGraphic" result="blend"/>
                  <feBlend mode="color-dodge" in="composite2" in2="blend" result="blend1"/>
                  <feBlend mode="soft-light" in="composite3" in2="blend1" result="blend2"/>
                </filter>
              </defs>
              <path fill="#21201F" fill-rule="evenodd" d="M40.082 82.306a35.77 35.77 0 0 1 1.51-5.95c3.095-9.218 3.68-11.2 3.947-12.104.194-.658.22-.744.923-2.636 2.74-7.4 5.24-14.07 7.65-20.41a11.26 11.26 0 0 1 2.62-4 13.478 13.478 0 0 1 4-2.59c1.34-.66 3.26-1.58 5.6-2.59a32.21 32.21 0 0 1 6.73-2.41 14.77 14.77 0 0 1 6.47-.07c.817.198 1.205.382 2.08.797.58.276 1.374.653 2.65 1.203 0 0 2.63 1.16 5.48 2.22a43.862 43.862 0 0 0 8.22 2.45 32.93 32.93 0 0 0 9.07.33c2.845-.319 5.64-.99 8.32-2 2.16-.74 10.4-3.51 17.06-5a77.924 77.924 0 0 1 20.68-1.41c2.092.138 4.156.552 6.14 1.23a22.673 22.673 0 0 1 7.8 4.68 28.987 28.987 0 0 1 4.35 5.24c.371.59.633 1.047.854 1.433.458.801.741 1.295 1.456 2.017a8.938 8.938 0 0 0 5.17 2.79 8.63 8.63 0 0 0 5.13-.95 9.82 9.82 0 0 0 3.92-3.59 32.39 32.39 0 0 0 1.56-3.4c.422-.979.732-1.71.969-2.271.645-1.524.753-1.776 1.111-2.26a10.205 10.205 0 0 1 3.64-3 15.529 15.529 0 0 1 4.91-1.37 34.342 34.342 0 0 1 10-.19c1.675.108 3.312.543 4.82 1.28 1.65.957 3.056 2.281 4.11 3.87a23.617 23.617 0 0 1 2.12 4c.65 1.397.968 2.236 1.2 2.848.297.782.453 1.194.98 1.923a10.247 10.247 0 0 0 3.73 3.16c1.04.505 2.154.842 3.3 1 1.922.282 3.88.197 5.77-.25a18.993 18.993 0 0 0 4.94-1.95 40.241 40.241 0 0 0 8-6c1.57-1.41 2.327-2.235 2.934-2.897.685-.746 1.18-1.285 2.436-2.223a22.997 22.997 0 0 1 6.68-3.68 26.208 26.208 0 0 1 5.48-1.17c.53-.07 1.13-.13 3.84-.23 7.31-.29 8.82-.29 10.84 0 1.045.13 2.081.33 3.1.6.888.24 1.431.448 2.307.783.583.224 1.314.503 2.393.887l.88.317c1.239.448 1.927.697 2.33.763a11.58 11.58 0 0 0 5.2-.07c.61-.157.862-.283 1.269-.487.422-.211 1.01-.505 2.331-1.003a35.969 35.969 0 0 1 3.53-1.15 33.585 33.585 0 0 1 4-.82 39.451 39.451 0 0 1 10.25.23 46.76 46.76 0 0 1 6.71 1.25 67.28 67.28 0 0 1 14.35 5.93 45.998 45.998 0 0 0 5.35 2.58c.932.427 1.903.762 2.9 1 1.373.314 2.782.445 4.19.39 2.174.02 4.336-.318 6.4-1a22.822 22.822 0 0 0 3.94-1.92 99.8 99.8 0 0 1 10.14-4.63 53.716 53.716 0 0 1 7.33-2.34 40.232 40.232 0 0 1 19.34.69 46.506 46.506 0 0 1 13.44 6.12 51.785 51.785 0 0 1 10.91 9.21c3.9 4.42 6 8.37 8.22 12.76 1.308 2.52 2.616 5.744 5.153 11.993l.307.757s1.85 4.58 3.61 10.46a32.674 32.674 0 0 1 1.06 4.57 17.36 17.36 0 0 1 .39 4.46 10.002 10.002 0 0 1-2.44 6.48 9.104 9.104 0 0 1-4 2.38c-1.427.402-2.91.568-4.39.49a17.603 17.603 0 0 1-4.25-.35 8.893 8.893 0 0 1-3.16-1.1 8.352 8.352 0 0 1-2.34-2.23 17.746 17.746 0 0 1-2.58-4.71c-1.37-3.63-2.46-6.94-3.26-9.53-1.62-5.75-3.18-10.33-4.4-13.65a25.215 25.215 0 0 0-2.76-5.7 17.677 17.677 0 0 0-5.81-5.85 14.007 14.007 0 0 0-5.39-2 13.53 13.53 0 0 0-5.49.39 13.154 13.154 0 0 0-4.89 2.63 13.504 13.504 0 0 0-3.46 4.78 21.105 21.105 0 0 0-1.75 7.37c-.347 3.208-.49 5.282-.644 7.5v.002c-.121 1.75-.248 3.59-.486 6.148-.073.803-.496 3.112-1.314 7.581l-.246 1.349a9.297 9.297 0 0 1-1.94 4.73 8.312 8.312 0 0 1-3 2.17 10.48 10.48 0 0 1-2.36.57 19.077 19.077 0 0 1-5.91.09 12.932 12.932 0 0 1-4.2-1.18 12.121 12.121 0 0 1-4-3.21 16.45 16.45 0 0 1-3-5.58c-.851-2.442-1.05-4.056-1.291-6.016-.173-1.403-.368-2.984-.839-5.174a38.082 38.082 0 0 0-1.79-6.67 27.48 27.48 0 0 0-9.21-12.28 31.008 31.008 0 0 0-10.07-4.44 10.393 10.393 0 0 0-4.34-.28 9.527 9.527 0 0 0-4 1.6 9.997 9.997 0 0 0-3.31 4.21 15.402 15.402 0 0 0-1.23 4.63c-.326 2.258-.339 3.665-.357 5.666v.002c-.008.95-.018 2.032-.063 3.402a41.35 41.35 0 0 1-.18 2.963c-.075.808-.167 1.798-.29 4.357-.034.675-.061 1.278-.086 1.827-.122 2.702-.184 4.078-.674 6.173a12.437 12.437 0 0 1-1.89 4.67 10.44 10.44 0 0 1-3.59 3.12 11.733 11.733 0 0 1-4.76 1.21c-2.591.29-5.213-.01-7.67-.88a24.819 24.819 0 0 0-3.4-1.18 12.17 12.17 0 0 0-3-.47 11.513 11.513 0 0 0-3.55.52 20.694 20.694 0 0 0-3.21 1.49 13.708 13.708 0 0 1-4.82 1.13l-11.57.07a24.088 24.088 0 0 1-8.46-1 19.79 19.79 0 0 1-6.19-3c-1.182-.87-1.73-1.49-3.849-3.889l-1.071-1.211c-3.04-3.43-4.56-5.12-5-5.53a21.235 21.235 0 0 0-9.5-5.38 15.931 15.931 0 0 0-7-.25 14.998 14.998 0 0 0-5.84 2.48 17.666 17.666 0 0 0-3.33 3.4c-.692.834-.999 1.286-1.62 2.204-.385.568-.889 1.313-1.68 2.436a31.427 31.427 0 0 1-3.72 4.82 14.405 14.405 0 0 1-3.93 2.77 13.008 13.008 0 0 1-3.3 1 40.524 40.524 0 0 1-5.46.33 39.71 39.71 0 0 1-6.56-.61c-2.83-.51-3.63-1-4-1.24a8.506 8.506 0 0 1-2.69-3.19c-.43-.77-.59-1.27-2.12-6.2l-.007-.02c-.495-1.615-.666-2.173-1.263-2.77a4.795 4.795 0 0 0-3.59-1.23 4.898 4.898 0 0 0-2.79 1.32 8.179 8.179 0 0 0-1.75 2.8c-1.06 2.18-1.59 3.27-2 3.9a13.642 13.642 0 0 1-3.86 4.43 14.48 14.48 0 0 1-5.43 2.24c-1.379.341-2.79.539-4.21.59l-6.45-.42a9.411 9.411 0 0 1-1.81-.5c-3.198-1.23-4.865-3.925-5.878-5.563l-.122-.197c-.47-.83-1.72-3.15-2.55-8.32-.36-2.259-.379-3.419-.406-5.063a82.907 82.907 0 0 0-.184-4.667c-.43-6.45-.68-9.75-2.48-13.25a15.829 15.829 0 0 0-5.17-6.17 15.566 15.566 0 0 0-6-2.33 52.261 52.261 0 0 0-20.55.59c-4.53 1-9 2.07-14.12 5.29a40.579 40.579 0 0 0-10.18 9.35 57.901 57.901 0 0 0-6 10.14 130.866 130.866 0 0 0-1.935 3.958c-1.015 2.144-1.95 4.12-3.735 7.162a21.28 21.28 0 0 1-5 6.38 18.82 18.82 0 0 1-5 2.9 19.14 19.14 0 0 1-5.22 1.26 22.999 22.999 0 0 1-9.16-.76 12.07 12.07 0 0 1-4-1.84 11.219 11.219 0 0 1-3.55-4.64c-1.21-3.26-.74-6.33-.15-9.93Zm227.76-29.69a15.117 15.117 0 0 0-2.83 2.55 11.938 11.938 0 0 0-1.85 2.72 11.274 11.274 0 0 0-.68 7.48 11.718 11.718 0 0 0 1.74 3.65c.575.83 1.246 1.588 2 2.26a129.789 129.789 0 0 0 12.16 10c.593.449 1.233.831 1.91 1.14a7.58 7.58 0 0 0 4.64.81 4.847 4.847 0 0 0 4.22-4.15c.083-.465.107-.94.07-1.41-.313-10.62-.62-21.24-.92-31.86a4.6 4.6 0 0 0-.43-1.66 3.866 3.866 0 0 0-1.19-1.6 4.002 4.002 0 0 0-2.35-.71 5.742 5.742 0 0 0-2 .32 8.09 8.09 0 0 0-2.37 1.24c-1.655 1.243-3.29 2.507-4.926 3.77-2.376 1.836-4.754 3.673-7.194 5.45Z" clip-rule="evenodd" filter="url(#filter)"/>
              <path stroke="#21201F" stroke-miterlimit="10" stroke-width="2" d="M379.552 92.486a9.297 9.297 0 0 1-1.94 4.73 8.312 8.312 0 0 1-3 2.17 10.48 10.48 0 0 1-2.36.57 19.077 19.077 0 0 1-5.91.09 12.932 12.932 0 0 1-4.2-1.18 12.121 12.121 0 0 1-4-3.21 16.45 16.45 0 0 1-3-5.58c-.851-2.442-1.05-4.056-1.291-6.016-.173-1.403-.368-2.984-.839-5.174a38.082 38.082 0 0 0-1.79-6.67 27.48 27.48 0 0 0-9.21-12.28 31.008 31.008 0 0 0-10.07-4.44 10.393 10.393 0 0 0-4.34-.28 9.527 9.527 0 0 0-4 1.6 9.997 9.997 0 0 0-3.31 4.21 15.402 15.402 0 0 0-1.23 4.63c-.326 2.258-.339 3.665-.357 5.666v.002c-.008.95-.018 2.032-.063 3.402a41.35 41.35 0 0 1-.18 2.963c-.075.808-.167 1.798-.29 4.357-.034.675-.061 1.278-.086 1.827-.122 2.702-.184 4.078-.674 6.173a12.437 12.437 0 0 1-1.89 4.67 10.44 10.44 0 0 1-3.59 3.12 11.733 11.733 0 0 1-4.76 1.21c-2.591.29-5.213-.01-7.67-.88a24.819 24.819 0 0 0-3.4-1.18 12.17 12.17 0 0 0-3-.47 11.513 11.513 0 0 0-3.55.52 20.694 20.694 0 0 0-3.21 1.49 13.708 13.708 0 0 1-4.82 1.13l-11.57.07a24.088 24.088 0 0 1-8.46-1 19.79 19.79 0 0 1-6.19-3c-1.182-.87-1.73-1.49-3.849-3.889l-1.071-1.211c-3.04-3.43-4.56-5.12-5-5.53a21.235 21.235 0 0 0-9.5-5.38 15.931 15.931 0 0 0-7-.25 14.998 14.998 0 0 0-5.84 2.48 17.666 17.666 0 0 0-3.33 3.4c-.692.834-.999 1.286-1.62 2.204-.385.568-.889 1.313-1.68 2.436a31.427 31.427 0 0 1-3.72 4.82 14.405 14.405 0 0 1-3.93 2.77 13.008 13.008 0 0 1-3.3 1 40.524 40.524 0 0 1-5.46.33 39.71 39.71 0 0 1-6.56-.61c-2.83-.51-3.63-1-4-1.24a8.506 8.506 0 0 1-2.69-3.19c-.43-.77-.59-1.27-2.12-6.2l-.007-.02c-.495-1.615-.666-2.173-1.263-2.77a4.795 4.795 0 0 0-3.59-1.23 4.898 4.898 0 0 0-2.79 1.32 8.179 8.179 0 0 0-1.75 2.8c-1.06 2.18-1.59 3.27-2 3.9a13.642 13.642 0 0 1-3.86 4.43 14.48 14.48 0 0 1-5.43 2.24c-1.379.341-2.79.539-4.21.59l-6.45-.42a9.411 9.411 0 0 1-1.81-.5c-3.198-1.23-4.865-3.925-5.878-5.563m233.958.043.246-1.349m-.246 1.349.246-1.349m-234.326 1.109c-.47-.83-1.72-3.15-2.55-8.32-.36-2.259-.379-3.419-.406-5.063a82.907 82.907 0 0 0-.184-4.667c-.43-6.45-.68-9.75-2.48-13.25a15.829 15.829 0 0 0-5.17-6.17 15.566 15.566 0 0 0-6-2.33 52.261 52.261 0 0 0-20.55.59c-4.53 1-9 2.07-14.12 5.29a40.579 40.579 0 0 0-10.18 9.35 57.901 57.901 0 0 0-6 10.14 130.866 130.866 0 0 0-1.935 3.958c-1.015 2.144-1.95 4.12-3.735 7.162a21.28 21.28 0 0 1-5 6.38 18.82 18.82 0 0 1-5 2.9 19.14 19.14 0 0 1-5.22 1.26 22.999 22.999 0 0 1-9.16-.76 12.07 12.07 0 0 1-4-1.84 11.219 11.219 0 0 1-3.55-4.64c-1.21-3.26-.74-6.33-.15-9.93a35.77 35.77 0 0 1 1.51-5.95c3.095-9.218 3.68-11.2 3.947-12.104.194-.658.22-.744.923-2.636 2.74-7.4 5.24-14.07 7.65-20.41a11.26 11.26 0 0 1 2.62-4 13.478 13.478 0 0 1 4-2.59c1.34-.66 3.26-1.58 5.6-2.59a32.21 32.21 0 0 1 6.73-2.41 14.77 14.77 0 0 1 6.47-.07c.817.198 1.205.382 2.08.797.58.276 1.374.653 2.65 1.203 0 0 2.63 1.16 5.48 2.22a43.862 43.862 0 0 0 8.22 2.45 32.93 32.93 0 0 0 9.07.33c2.845-.319 5.64-.99 8.32-2 2.16-.74 10.4-3.51 17.06-5a77.924 77.924 0 0 1 20.68-1.41c2.092.138 4.156.552 6.14 1.23a22.673 22.673 0 0 1 7.8 4.68 28.987 28.987 0 0 1 4.35 5.24c.371.59.633 1.047.854 1.433.458.801.741 1.295 1.456 2.017a8.938 8.938 0 0 0 5.17 2.79 8.63 8.63 0 0 0 5.13-.95 9.82 9.82 0 0 0 3.92-3.59 32.39 32.39 0 0 0 1.56-3.4c.422-.979.732-1.71.969-2.271.645-1.524.753-1.776 1.111-2.26a10.205 10.205 0 0 1 3.64-3 15.529 15.529 0 0 1 4.91-1.37 34.342 34.342 0 0 1 10-.19c1.675.108 3.312.543 4.82 1.28 1.65.957 3.056 2.281 4.11 3.87a23.617 23.617 0 0 1 2.12 4c.65 1.397.968 2.236 1.2 2.848.297.782.453 1.194.98 1.923a10.247 10.247 0 0 0 3.73 3.16c1.04.505 2.154.842 3.3 1 1.922.282 3.88.197 5.77-.25a18.993 18.993 0 0 0 4.94-1.95 40.241 40.241 0 0 0 8-6c1.57-1.41 2.327-2.235 2.934-2.897.685-.746 1.18-1.285 2.436-2.223a22.997 22.997 0 0 1 6.68-3.68 26.208 26.208 0 0 1 5.48-1.17c.53-.07 1.13-.13 3.84-.23 7.31-.29 8.82-.29 10.84 0 1.045.13 2.081.33 3.1.6.888.24 1.431.448 2.307.783.583.224 1.314.503 2.393.887l.88.317c1.239.448 1.927.697 2.33.763a11.58 11.58 0 0 0 5.2-.07c.61-.157.862-.283 1.269-.487.422-.211 1.01-.505 2.331-1.003a35.969 35.969 0 0 1 3.53-1.15 33.585 33.585 0 0 1 4-.82 39.451 39.451 0 0 1 10.25.23 46.76 46.76 0 0 1 6.71 1.25 67.28 67.28 0 0 1 14.35 5.93 45.998 45.998 0 0 0 5.35 2.58c.932.427 1.903.762 2.9 1 1.373.314 2.782.445 4.19.39 2.174.02 4.336-.318 6.4-1a22.822 22.822 0 0 0 3.94-1.92 99.8 99.8 0 0 1 10.14-4.63 53.716 53.716 0 0 1 7.33-2.34 40.232 40.232 0 0 1 19.34.69 46.506 46.506 0 0 1 13.44 6.12 51.785 51.785 0 0 1 10.91 9.21c3.9 4.42 6 8.37 8.22 12.76 1.308 2.52 2.616 5.744 5.153 11.993l.307.757s1.85 4.58 3.61 10.46a32.674 32.674 0 0 1 1.06 4.57 17.36 17.36 0 0 1 .39 4.46 10.002 10.002 0 0 1-2.44 6.48 9.104 9.104 0 0 1-4 2.38c-1.427.402-2.91.568-4.39.49a17.603 17.603 0 0 1-4.25-.35 8.893 8.893 0 0 1-3.16-1.1 8.352 8.352 0 0 1-2.34-2.23 17.746 17.746 0 0 1-2.58-4.71c-1.37-3.63-2.46-6.94-3.26-9.53-1.62-5.75-3.18-10.33-4.4-13.65a25.215 25.215 0 0 0-2.76-5.7 17.677 17.677 0 0 0-5.81-5.85 14.007 14.007 0 0 0-5.39-2 13.53 13.53 0 0 0-5.49.39 13.154 13.154 0 0 0-4.89 2.63 13.504 13.504 0 0 0-3.46 4.78 21.105 21.105 0 0 0-1.75 7.37c-.347 3.208-.49 5.282-.644 7.5v.002c-.121 1.75-.248 3.59-.486 6.148-.073.803-.496 3.112-1.314 7.581m-234.326 1.109.122.197m-.122-.197.122.197m119.418-37.277a15.117 15.117 0 0 1 2.83-2.55c2.44-1.777 4.818-3.614 7.194-5.45 1.636-1.263 3.271-2.527 4.926-3.77a8.09 8.09 0 0 1 2.37-1.24 5.742 5.742 0 0 1 2-.32 4.002 4.002 0 0 1 2.35.71c.53.42.94.972 1.19 1.6a4.6 4.6 0 0 1 .43 1.66c.3 10.62.607 21.24.92 31.86.037.47.013.945-.07 1.41a4.849 4.849 0 0 1-4.22 4.15 7.58 7.58 0 0 1-4.64-.81 10.116 10.116 0 0 1-1.91-1.14 129.789 129.789 0 0 1-12.16-10 12.767 12.767 0 0 1-2-2.26 11.718 11.718 0 0 1-1.74-3.65 11.274 11.274 0 0 1 .68-7.48 11.938 11.938 0 0 1 1.85-2.72Z"/>
              <path fill="#21201F" d="M462.275 99.063c-6.4 0-11.648-5.248-11.648-11.648 0-6.4 5.248-11.648 11.648-11.648 6.4 0 11.648 5.248 11.648 11.648 0 6.4-5.248 11.648-11.648 11.648Zm0-1.28c5.536 0 10.048-4.64 10.048-10.368 0-5.728-4.512-10.368-10.048-10.368-5.536 0-10.048 4.64-10.048 10.368 0 5.728 4.512 10.368 10.048 10.368Zm-3.68-5.792v-9.184c0-1.856-.576-1.792-1.536-1.824-.384 0-.448-.224-.448-.32 0-.128.064-.256.224-.288h.192c.832.096 1.632.096 2.464.096 1.984 0 2.464-.096 3.584-.096 3.552 0 4.416 1.888 4.416 3.456 0 1.472-.896 2.88-3.648 3.296v.096c.256 0 .608.096 1.088.928l2.528 4.512c.32.544.544 1.088 1.408 1.152.352.032.672-.032.672.32 0 .256-.192.288-.416.32-.224.032-.416 0-.64 0h-.736c-.288 0-.576.032-.864.032-.544 0-.64-.032-1.024-.736l-2.592-4.96c-.352-.672-.736-1.28-1.44-1.28h-1.152c-.32 0-.288.288-.288.544v3.936c0 2.08.768 1.76 1.6 1.824.288.032.384.192.384.32 0 .256-.32.32-.416.32-.8 0-1.632-.096-2.464-.096-.832 0-1.632.096-2.464.096-.352 0-.416-.192-.416-.32s.096-.288.384-.32c.832-.064 1.6.256 1.6-1.824Zm1.792-9.632v4.032c0 .416.096.544.576.544h1.088c3.008 0 3.552-1.792 3.552-2.976 0-1.248-.608-2.912-3.264-3.008h-.704c-.864.032-1.248.128-1.248 1.408Z"/>
            </svg>
      </Link>
    </h2>
  );
}
