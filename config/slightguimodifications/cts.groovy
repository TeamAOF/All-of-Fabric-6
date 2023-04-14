
mainMenu {
    enabled = true

    splashText {
        enabled = true
        splashesEnabled = false
    }

    background {
        clearBackgrounds()
        backgroundStayLength = 50000 // 50 seconds
        backgroundFadeLength = 2000 // 2 seconds fade
        renderGradientShade = false
        image { texture = file("config/slightguimodifications/background.png") }
    }

    removeMinecraftLogo()
    removeEditionBadge()
    clearAllButtons()

    label {
        position {
            x = 2
            y {
                it - 20
            }
        }

        text = literal("All of Fabric 6 - 1.5.3")
        shadow = true
    }

    button {
        position {
            x {it / 2}
            y {it / 2 + 5}
        }
        width = 150
        height = 20
		align = "center"
        text = translatable("menu.singleplayer")
        color = 0x0000000
        onClicked = singleplayer()
    }
    button {
        position {
            x {it / 2}
            y {it / 2 + 30}
        }
        width = 150
        height = 20
        align = "center"

        text = translatable("menu.multiplayer")
        onClicked = multiplayer()
    }

     button {
        position {
            x {it / 2}
            y { it / 2 + 55}
        }
        width = 150
        height = 20
        align = "center"

        text = literal("Mods")
        onClicked = modMenu()
    }

     button {
        position {
            x {it / 2}
            y { it / 2 + 80}
        }
        width = 150
        height = 20
        align = "center"

        text = literal("Rent A Server")
        onClicked = url("https://www.bisecthosting.com/AOF")
    }
    
    /*
    button {
        position {
            x {it / 2 + 230}
            y {it / 2}
        }
        width = 70
        height = 20

        text = literal("Reload")
        onClicked = reloadCts()
    }
    */

     button {
        position {
            x {it / 2 - 20}
            y { it / 2 + 105}
        }
        width = 25
        height = 25
        align = "center"

        texture = file("config/slightguimodifications/languages_button.png")
        hoveredTexture = file("config/slightguimodifications/languages_button_hovered.png")
        onClicked = language()
    }
    
    button {
        position {
            x {it / 2 + 60}
            y { it / 2 + 105}
        }
        width = 25
        height = 25
        align = "center"

        texture = file("config/slightguimodifications/exit_button.png")
        hoveredTexture = file("config/slightguimodifications/exit_button_hovered.png")
        onClicked = exit()
    }
    button {
        position {
            x {it / 2 + 20}
            y { it / 2 + 105}
        }
        width = 25
        height = 25
        align = "center"

        texture = file("config/slightguimodifications/config_button.png")
        hoveredTexture = file("config/slightguimodifications/config_button_hovered.png")
        onClicked = options()
    }
    button {
        position {
            x {it / 2 - 60}
            y { it / 2 + 105}
        }
        width = 25
        height = 25
        align = "center"

        texture = file("config/slightguimodifications/discord_button.png")
        hoveredTexture = file("config/slightguimodifications/discord_button_hovered.png")
        onClicked = url("https://discord.gg/6rkdm48")
    }
}