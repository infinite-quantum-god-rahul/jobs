enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  NONE = 4,
}

const CURRENT_LOG_LEVEL = LogLevel.INFO;

class Logger {
  private static log(level: LogLevel, message: string, ...args: any[]) {
    if (level >= CURRENT_LOG_LEVEL) {
      const timestamp = new Date().toISOString();
      const prefix = [] [];
      switch (level) {
        case LogLevel.DEBUG:
          console.debug(prefix, message, ...args);
          break;
        case LogLevel.INFO:
          console.info(prefix, message, ...args);
          break;
        case LogLevel.WARN:
          console.warn(prefix, message, ...args);
          break;
        case LogLevel.ERROR:
          console.error(prefix, message, ...args);
          break;
        default:
          console.log(prefix, message, ...args);
      }
    }
  }

  static debug(message: string, ...args: any[]) {
    this.log(LogLevel.DEBUG, message, ...args);
  }

  static info(message: string, ...args: any[]) {
    this.log(LogLevel.INFO, message, ...args);
  }

  static warn(message: string, ...args: any[]) {
    this.log(LogLevel.WARN, message, ...args);
  }

  static error(message: string, ...args: any[]) {
    this.log(LogLevel.ERROR, message, ...args);
  }
}

export default Logger;
