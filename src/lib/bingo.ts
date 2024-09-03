import { supabaseClient } from "./supabase/client";

export type TRoom = {
  id?: number;
  room?: number;
  private?: boolean;
  password?: string;
  created_at?: string;
};

export type TConfigRoom = {
  username: string
  qtdNumbersBingo: number,
  qtdNumbersCard: number,
  valueCard: number,
  timeCallNumbers: number
}

// Função para criar um ID de sala aleatório
export function createRoomId() {
  return Math.floor(Math.random() * 900000) + 100000;
}

  // Objeto com funções CRUD para a tabela rooms  
export const rooms = {
  // Função para obter todas as salas
  all: async () => {
    const supabase = supabaseClient();
    const response = await supabase.from("rooms").select("*");

    if (response.error) {
      console.error("Erro ao buscar as salas:", response.error.message);
      return [];
    }
    return response;
  },

  // Função para obter uma sala por ID
  byId: async (id: number) => {
    const supabase = supabaseClient();
    const response = await supabase
      .from("rooms")
      .select("*")
      .or(`id.eq.${id},room.eq.${id}`);

    if (response.error) {
      console.error("Erro ao buscar a sala:", response.error.message);
      return null;
    }
    return response;
  },

  // Função para criar uma nova sala
  create: async (create_data: TRoom) => {
    const supabase = supabaseClient();
    const response = await supabase.from("rooms").insert([
      {
        room: createRoomId(),
        private: create_data.private || false,
        password: create_data.password || null,
      },
    ]).select();


    if (response.error) {
      console.error("Erro ao criar a sala:", response.error.message);
      return null;
    }

    return response;
  },

  // Função para atualizar uma sala existente
  update: async (update_data: TRoom) => {
    const supabase = supabaseClient();
    const { data, error } = await supabase
      .from("rooms")
      .update(update_data)
      .eq("id", update_data.id);

    if (error) {
      console.error("Erro ao atualizar a sala:", error.message);
      return null;
    }
    return data;
  },

  // Função para deletar uma sala pelo ID
  delete: async (id: number) => {
    const supabase = supabaseClient();
    const { data, error } = await supabase
      .from("rooms")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Erro ao deletar a sala:", error.message);
      return null;
    }
    return data;
  },

};

export const config = {
  // Função para criar uma nova sala
  create: async (create_data: TConfigRoom,roomId:number) => {
    const supabase = supabaseClient();
    const response = await supabase.from("config").insert([
      {
        roomId,
        qtdNumbersBingo:create_data.qtdNumbersBingo,
        qtdNumbersCard:create_data.qtdNumbersCard,
        valueCard:create_data.valueCard,
        timeCallNumbers:create_data.timeCallNumbers
      },
    ]).select();


    if (response.error) {
      console.error("Erro ao criar a sala:", response.error.message);
      return null;
    }

    return response;
  },
}
