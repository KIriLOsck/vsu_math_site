from sqlalchemy.ext.asyncio import AsyncAttrs
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import Text, Integer, Boolean
from sqlalchemy.dialects.postgresql import JSONB
from datetime import datetime
from sqlalchemy.orm import Mapped, mapped_column

class Base(AsyncAttrs, DeclarativeBase): ...

class SheduleBase(Base):
    __tablename__ = "shedule"
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True, autoincrement=True)
    year: Mapped[int] = mapped_column(Integer, nullable=False)
    speciality: Mapped[str] = mapped_column(Text, nullable=False)
    level: Mapped[str] = mapped_column(Text, nullable=False)
    group: Mapped[str] = mapped_column(Text, nullable=True)
    day: Mapped[str] = mapped_column(Text, nullable=False)
    time: Mapped[str] = mapped_column(Text, nullable=False)
    detail: Mapped[str] = mapped_column(Text, nullable=False)
    numerator: Mapped[bool] = mapped_column(Boolean, nullable=False)
    auditory: Mapped[str] = mapped_column(Text, nullable=True)
    teacher: Mapped[str] = mapped_column(Text, nullable=True)
    address: Mapped[str] = mapped_column(Text, nullable=True)
    