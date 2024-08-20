import { useState } from "react";
import { api } from "./api";
import { EmotionModel } from "../model/EmotionModel";
import { formatDate } from "../utils/formatDate";
import { AppError } from "../utils/AppError";


export function Emotion() {
    const [emotion, setEmotion] = useState<EmotionModel[]>([])
    const [isLoading, setIsLoading] = useState(true)
    // const { toast } = useToast();

    async function fetchEmotion() {
        try {
            const { data } = await api.get("/emotion");
            const emotions = data.map((emotion: EmotionModel) => ({
                ...emotion,
                created_at: formatDate(emotion.created_at)
            }))
            
            setEmotion(emotions)
        } catch (error) {
            const isAppError = error instanceof AppError
            const message = isAppError ? error.message : "Não foi possivel carregar as emoções do usuario."
            // toast(message)
        } finally {
            setIsLoading(false)
        }
    }
}