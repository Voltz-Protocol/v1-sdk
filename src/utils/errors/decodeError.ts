import { getErrorSignature, getReadableErrorMessage } from './errorHandling';

const error = {
  data: 'Reverted 0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001e656e6454696d65206d757374206265203e3d2063757272656e7454696d650000',
};

console.log(getReadableErrorMessage(error, 'KOVAN'));
