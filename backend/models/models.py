from pydantic import BaseModel, Field

class PairModel(BaseModel):
    year: int = Field(..., examples=[2])
    speciality: str = Field(..., examples=["Информационные системмы и приграмирование (на базе 9 классов)"])
    level: str = Field(..., examples=["СПО"])
    group: str | None = Field(..., examples=["Группа 01/2"])
    day: str = Field(..., examples=["Вторник"])
    time: str = Field(..., examples=["9:45.11:20"])
    detail: str = Field(..., examples=["Основы алгоритизации и програмирования"])
    numerator: bool = Field(..., examples=[True])
    auditory: str = Field(examples=["306"])
    teacher: str = Field(examples=["Золотарева Е.А."])
    address: str = Field(examples=[""])

class SheduleModel(BaseModel):
    shedule: list[PairModel]

