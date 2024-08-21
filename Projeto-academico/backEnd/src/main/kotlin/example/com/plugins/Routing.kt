package example.com.plugins

import example.com.model.Emotion
import example.com.repository.EmotionRepo
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.configureRouting() {
    val emotionRepo = EmotionRepo()
    routing {
        get("/") {
            call.respondText("Hello World!")
        }
        get("/emotion"){
            call.respond(emotionRepo.emotions)
        }
        post("/saveEmotion"){
            val emotion = call.receive<Emotion>()
            emotionRepo.save(emotion)
            call.respondText("Emotion saved", status = HttpStatusCode.Created)
        }
    }
}
