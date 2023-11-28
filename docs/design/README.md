# Проєктування бази даних
## Модель бізнес-об'єктів

@startuml

  entity User <<ENTITY>> #6f91c7
  entity User.id <<NUMBER>> #e9f2d5
  entity User.nickname <<TEXT>> #e9f2d5
  entity User.email <<TEXT>> #e9f2d5
  entity User.password <<TEXT>> #e9f2d5
  
  User *-r- User.id 
  User *-d- User.nickname
  User *-d- User.email 
  User *-l- User.password
  
  entity Access <<ENTITY>> #6f91c7
  entity Access.id <<TEXT>>
  
  Access *-- Access.id
  
  entity Role <<ENTITY>> #6f91c7
  entity Role.name <<TEXT>> #d7dbb4
  entity Role.description <<TEXT>> #d7dbb4
  
  User "0,*"--"1,1" Access
  Access "1,1"--"0,*" Role
  
  Role *-d- Role.description
  Role *-d- Role.name
  
  entity MentionReport <<ENTITY>> #6f91c7
  entity MentionReport.id <<NUMBER>> #b9bd9d
  entity MentionReport.description <<TEXT>> #b9bd9d
  entity MentionReport.creationDate <<DATE>> #b9bd9d
  entity MentionReport.title <<TEXT>> #b9bd9d
  
  User "1,1"-u-"0,*" MentionReport
  
  MentionReport *-u- MentionReport.id
  MentionReport *-u- MentionReport.description
  MentionReport *-u- MentionReport.creationDate
  MentionReport *-l- MentionReport.title
  
  entity ResultData <<ENTITY>> #6f91c7
  entity ResultData.id <<NUMBER>> #dbce9e
  entity ResultData.mentions <<NUMBER>> #dbce9e
  entity ResultData.mentionedAt <<DATE>> #dbce9e
  entity ResultData.source <<TEXT>> #dbce9e
  entity ResultData.body <<TEXT>> #dbce9e
  
  MentionReport "1,1"--"0,*" ResultData
  
  ResultData *-r- ResultData.id 
  ResultData *-u- ResultData.mentions 
  ResultData *-u- ResultData.mentionedAt 
  ResultData *-d- ResultData.source
  ResultData *-l- ResultData.body 
  
  entity PubRequest <<ENTITY>> #6f91c7
  entity PubRequest.date <<DATE>> #cfb899
  entity PubRequest.name <<TEXT>> #cfb899
  
  User "1,1"-u-"0,*" PubRequest
  PubRequest *-u- PubRequest.date
  PubRequest *-d- PubRequest.name
  
  entity PubReview <<ENTITY>> #6f91c7
  entity PubReview.status <<TEXT>> #cfa899
  
  User "1,1"--"0,*" PubReview
  PubReview "0,*"--"1,1" PubRequest
  PubReview *-r- PubReview.status
  
@enduml
  
## ER-модель

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

## Реляційна схема

<p align="center">
  <img src="./media/relational_schema.jpg" width="600">
</p>