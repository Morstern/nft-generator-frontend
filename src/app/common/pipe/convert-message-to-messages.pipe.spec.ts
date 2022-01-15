import { ConvertMessageToMessagesPipe } from './convert-message-to-messages.pipe';

describe('ConvertMessageToMessagesPipe', () => {
  const TEST_MESSAGE_1 = 'Test message 1';
  const TEST_MESSAGE_2 = 'Test message 2';

  it('should convert single message to array', () => {
    const pipe = new ConvertMessageToMessagesPipe();
    expect(pipe.transform(TEST_MESSAGE_1)).toEqual([TEST_MESSAGE_1]);
  });

  it('should return same array when transforming multiple messages', () => {
    const pipe = new ConvertMessageToMessagesPipe();
    expect(pipe.transform([TEST_MESSAGE_1, TEST_MESSAGE_2])).toEqual([
      TEST_MESSAGE_1,
      TEST_MESSAGE_2,
    ]);
  });
});
