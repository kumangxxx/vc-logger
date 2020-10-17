import VCLogger from '../index';

// const conlog = console.log
Date.now = jest.fn(() => 1602208800000); // 9 Oct 2020, 9AM WIB

test('Basic Print INFO', () => {
    console.log = jest.fn();
    const logger = new VCLogger({
        logId: 'test-only',
    });

    logger.info('test jest');
    const mocked: any = console.log;

    const expectedLog = `[info]  test-only test jest`;
    const printedLog = mocked.mock.calls[0].join(' ');
    expect(expectedLog).toBe(printedLog);
});

test('Basic Print ERROR', () => {
    console.log = jest.fn();
    const logger = new VCLogger({
        logId: 'test-only',
        verboseLevel: 'e',
        dateFormat: 'YYYY-MM-DD',
    });

    logger.error('test jest');
    const mocked: any = console.log;

    const expectedLog = `[error] 2020-10-09 test-only test jest`;
    const printedLog = mocked.mock.calls[0].join(' ');
    expect(expectedLog).toBe(printedLog);
});

test('Basic Print DEBUG', () => {
    console.log = jest.fn();
    const logger = new VCLogger({
        logId: 'test-only',
        verboseLevel: 'd',
        dateFormat: 'YYYY-MM-DD',
    });

    logger.debug('test jest');
    const mocked: any = console.log;

    const expectedLog = `[debug] 2020-10-09 test-only test jest`;
    const printedLog = mocked.mock.calls[0].join(' ');
    expect(expectedLog).toBe(printedLog);
});

test('Basic Print WARNING', () => {
    console.log = jest.fn();
    const logger = new VCLogger({
        logId: 'test-only',
        verboseLevel: 'w',
        dateFormat: 'YYYY-MM-DD',
    });

    logger.warning('test jest');
    const mocked: any = console.log;

    const expectedLog = `[warning] 2020-10-09 test-only test jest`;
    const printedLog = mocked.mock.calls[0].join(' ');
    expect(expectedLog).toBe(printedLog);
});

test('Date Print INFO', () => {
    console.log = jest.fn();
    const logger = new VCLogger({
        logId: 'test-only',
        dateFormat: 'YYYY-MM-DD',
    });

    logger.info('test jest');
    const mocked: any = console.log;

    const expectedLog = `[info] 2020-10-09 test-only test jest`;
    const printedLog = mocked.mock.calls[0].join(' ');
    expect(expectedLog).toBe(printedLog);
});

test('Multi Print INFO ERROR', () => {
    console.log = jest.fn();
    const logger = new VCLogger({
        logId: 'test-only',
        verboseLevel: 'i,e',
        dateFormat: 'YYYY-MM-DD',
    });

    logger.info('test jest');
    logger.error('test jest');

    const mocked: any = console.log;

    const expectedLogs = [`[info] 2020-10-09 test-only test jest`, `[error] 2020-10-09 test-only test jest`];
    expectedLogs.forEach((expectedLog, i) => {
        const printedLog = mocked.mock.calls[i].join(' ');
        expect(expectedLog).toBe(printedLog);
    });
});

test('NEG Print WARNING', () => {
    console.log = jest.fn();
    const logger = new VCLogger({
        logId: 'test-only',
        dateFormat: 'YYYY-MM-DD',
    });

    logger.warning('test jest');
    const mocked: any = console.log;

    let printedLog: string | undefined = '';
    try {
        printedLog = mocked.mock.calls[0].join(' ');
    } catch (e) {
        printedLog = undefined;
    }
    expect(printedLog).toBe(undefined);
});
