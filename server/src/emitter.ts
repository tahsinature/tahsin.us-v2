import { EventEmitter } from 'events'

class Emitter {
  public ee = new EventEmitter({ captureRejections: true })
  events = {}
}

export default new Emitter()
