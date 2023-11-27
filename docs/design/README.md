# Проєктування бази даних

ER-модель

@startuml
entity ResultData <<ENTITY>> {
    id: NUMBER
    sourse:TEXT
    body: TEXT
    mentionedAt: DATE
    mentions: NUMBER
}

entity MentionReport <<ENTITY>> {
    id: NUMBER
    description: TEXT
    creationDate: DATE
    title: TEXT
}

entity User <<ENTITY>> {
    id: NUMBER
    password: TEXT
    nickname: TEXT
    email: TEXT
}

entity Role <<ENTITY>> {
    name: TEXT
    description: TEXT
}

entity Access <<ENTITY>> {
    id: NUMBER
}

entity PubReview <<ENTITY>> {
    status: TEXT
}

entity PubRequest <<ENTITY>> {
name: TEXT
date: DATE
}

MentionReport "1,1"--"0,*" ResultData
User "1,1"--"0,*" PubReview
PubRequest "1,1"--"0,*" PubReview
User "1,1"--"0,*" PubRequest
User "1,1"--"0,*" MentionReport
User "0,*"--"1,1" Access
Access "1,1"--"0,*" Role

@enduml
