import React from 'react';
import { Size } from '../types/common.types';

interface Props {
  squareText?: string;
  textStyleCustomClass?: string;
  squareSizeType: Size;
  squareBorderThickness: string;
  squareBorderColor: string;
  squareBgFilledColor?: string;
  handleClick?: (e: any) => void;
  clickedSquareState?: any;
}

const SquareComponent = ({
  clickedSquareState,
  textStyleCustomClass = '',
  squareText = '',
  squareBgFilledColor = '',
  squareBorderThickness = '2',
  squareBorderColor = 'border-black',
  squareSizeType = 'LG',
  handleClick = () => {},
}: Props) => {
  const sizeTypeMap = {
    XS: 'h-1 w-1',
    SM: 'h-2 w-2',
    MD: 'h-4 w-4',
    LG: 'h-8 w-8',
    XL: 'h-12 w-12',
    XXL: 'h-16 w-16',
  };

  return (
    <div
      className={`flex justify-center items-center ${sizeTypeMap[squareSizeType]} border-${squareBorderThickness} ${squareBorderColor} ${squareBgFilledColor} `}
      onClick={handleClick}>
      {squareText && <p className={textStyleCustomClass}>{squareText}</p>}
    </div>
  );
};

export default SquareComponent;
