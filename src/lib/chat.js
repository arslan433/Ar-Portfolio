import { supabase } from "./supabase";
import { v4 as uuidv4 } from "uuid";

export async function getOrCreateConversation() {
  let visitorId = localStorage.getItem("visitor_id");

  if (!visitorId) {
    visitorId = uuidv4();
    localStorage.setItem("visitor_id", visitorId);
  }

  const { data: conversation } = await supabase
    .from("conversations")
    .select("*")
    .eq("visitor_id", visitorId)
    .maybeSingle();

  if (conversation) return conversation;

  const { data, error } = await supabase
    .from("conversations")
    .insert({
      visitor_id: visitorId,
      status: "bot",
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function saveMessage(conversationId, sender, message) {
  const { data, error } = await supabase
    .from("messages")
    .insert({
      conversation_id: conversationId,
      sender,
      message,
    })
    .select()
    .single();

  if (error) throw error;

  const updateData = {
    last_message: message,
    updated_at: new Date().toISOString(),
  };

  if (sender === "user") {
    const { data: convo } = await supabase
      .from("conversations")
      .select("unread_count")
      .eq("id", conversationId)
      .single();

    updateData.unread_count = (convo?.unread_count || 0) + 1;
  }

  await supabase
    .from("conversations")
    .update(updateData)
    .eq("id", conversationId);

  return data;
}

export async function loadMessages(conversationId) {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("conversation_id", conversationId)
    .order("created_at", { ascending: true });

  if (error) throw error;

  return data || [];
}

export async function updateConversation(id, data) {
  const { error } = await supabase
    .from("conversations")
    .update(data)
    .eq("id", id);

  if (error) {
    console.error(error);
  }
}
