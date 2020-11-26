﻿let logado = JSON.parse(localStorage.getItem("logado"));
LoginUasuario = LoginUsuario_render({
    logado: logado,
    usuario: localStorage.getItem("nomeUsuario"),
    onLogin: (nomeUsuario) => {
        logado = true
        localStorage.setItem("logado",true)
        localStorage.setItem("nomeUsuario",nomeUsuario)
    },
    onLogout: () => {
        logado = false
        localStorage.setItem("logado",false)
        localStorage.setItem("nomeUsuario","")
    }
})