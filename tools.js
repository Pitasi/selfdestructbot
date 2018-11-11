module.exports = {
  Timer: function (callback, delay) {
      var id, started, remaining = delay, running

      this.start = function() {
          running = true
          started = new Date()
          id = setTimeout(callback, remaining)
      }

      this.pause = function() {
          running = false
          clearTimeout(id)
          remaining -= new Date() - started
      }

      this.getTimeLeft = function() {
          if (running) {
              this.pause()
              this.start()
          }

          return remaining
      }

      this.getStateRunning = function() {
          return running
      }

      this.start()
  }
};
