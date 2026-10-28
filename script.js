import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xwekofyhqeotxmqbwajh.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_wfycfPU8UEPl-gXPfYZ_rA_q-5uhj-R";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const formularioTareas = document.getElementById("formulario-tareas");
const inputTarea = formularioTareas.getElementById("entrada-tareas");
const ListaTareas = document.getElementById("lista-tareas"); 

function obtenerTareas() {
    const {data, error} = await supabase
    .from(tareas) 
    .select("*")
    .order{"id", { ascending: false }};
}