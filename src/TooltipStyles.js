const blackShade = '#232323';
const grayShade = '#F2F2F2';

export const toolTipStyles = {
  background: grayShade,
  border: '3px solid',
  borderColor: blackShade,
  borderRadius: '10px',
  color: '#fff',
  left: '50%',
  padding: '5px 10px',
  position: 'absolute',
  bottom: '200%',
  transform: 'translateX(-50%)',
  minWidth: '300px'
};

export const toolTipInnerWrapper = {
  position: 'relative'
};

export const toolTipHead = {
  position: 'absolute',
  bottom: '108%',
  color: blackShade,
  background: grayShade,
  width: '70%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  left: '50%',
  transform: 'translateX(-50%)',
  border: '3px solid',
  borderBottom: 0,
  borderColor: blackShade,
  borderTopRightRadius: '10px',
  borderTopLeftRadius: '10px',
  fontSize: '20px'
};

export const toolTipBodyBtnStyles = {
  background: blackShade,
  display: 'inline-block',
  color: grayShade,
  margin: '5px 0px',
  border: '1px solid',
  borderColor: blackShade,
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
  padding: '10px 12px',
  minWidth: '250px'
};

export const toolTipBtnText = {
  fontStyle: 'inherit',
  fontWeight: '600',
  fontSize: '16px'
};

export const toolTipAnchorText = {
  fontStyle: 'inherit',
  fontWeight: '600',
  fontSize: '18px'
};

export const afterStyles = {
  borderColor: `${blackShade} transparent transparent transparent`,
  borderStyle: 'solid',
  borderWidth: '15px 15px 0 15px',
  top: '100%',
  height: 0,
  left: '50%',
  position: 'absolute',
  transform: 'translateX(-50%)',
  width: 0
};
