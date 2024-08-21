import { useCallback, useEffect, useState } from "react";
import { api } from "./api";
import { useFocusEffect } from "@react-navigation/native";
import { EmotionModel } from "../model/EmotionModel";
import { formatDate } from "../utils/formatDate";
import { AppError } from "../utils/AppError";
import { Button, View, Text } from "react-native";
import React from "react";

export function Emotion() {
    const [emotion, setEmotion] = useState<EmotionModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    // const { toast } = useToast();

    async function fetchEmotion() {
        try {
            const { data } = await api.get("/emotion");
            const emotions = data.map((emotion: EmotionModel) => ({
                ...emotion,
                created_at: formatDate(emotion.created_at)
            }));
            
            console.log(emotions);
            setEmotion(emotions);
        } catch (error) {
            const isAppError = error instanceof AppError;
            const message = isAppError ? error.message : "Não foi possivel carregar as emoções do usuario.";
            console.log(message);
            // toast(message)
        } finally {
            setIsLoading(false);
        }
    }
    
    useEffect(() => {
        fetchEmotion()
    }, []);

    return (
        <View>
            <Text>Pressione o botao para consumir a API</Text>
            <Button
            onPress={fetchEmotion}
            title="Pressione"
            />
        </View>
    )
}