package example.com.repository

import example.com.model.Emotion

class EmotionRepo {

    val emotions get() = _emotions.toList()

    fun save(emotion: Emotion) {
        _emotions.add(emotion)
    }

    companion object {
        private val _emotions = mutableListOf<Emotion>()
    }
}