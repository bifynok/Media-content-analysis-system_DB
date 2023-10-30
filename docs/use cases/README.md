# Модель прецедентів

## Схема можливостей користувача

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

@startuml

    actor "Користувач" as User

    usecase "<b>USER_DELETE</b>\nВидалення облікового запису користувача" as UC_1
    usecase "<b>USER_GET_INFO</b>\nОтримання інформації про згадки користувачем" as UC_2

    User -d-> UC_1
    User -d-> UC_2

@enduml
</center>