package example.com.model

import kotlinx.serialization.Serializable

@Serializable
class Emotion(
    val name: String,
    val description: String
)