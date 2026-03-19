import json, re

from utils import replace_collisions

def extract_item(string: str, regular: str):
    items = re.findall(regular, string)
    for item in items:
        string = string.replace(item, "")

    return items, string

def extract_one_item(string: str, regular: str):
    item = re.findall(regular, string)
    if item:
        string = string.replace(item[0], "")

    return [item[0]] if item else [], string

def clear_result(string: str):
    collisions = {
        "ауд.": "",
        "аудитория": "",
        "комната": "",
        "главный корпус ВГУ": "",
        ",,": ",",
        " ., ": ", ",
        " ,": ", ",
        "( ": "(",
        " )": ")",
        ";": "",
        "()": "",
        "  ": " "
    }

    string = replace_collisions(string, collisions).strip().strip(",").strip()

    return string

def parse(raw_pairs):
    pairs = []
    for group in raw_pairs:
        for pair in group.get('pairs'):
            pair: dict
            detail: str = pair.get("detail")

            teacher, detail = extract_item(
                detail, r'[А-Я][а-я]*\s[А-Я]\.[А-Я]\.'
            )
            auditory, detail = extract_item(
                detail,
                r'https?:\/\/\S+|\d{2,3}П|\d{2,3}\/\d{1,3}|\d{3,}|спортзал ВГУ'
            )
            one_more_attempt_auditory, detail = extract_one_item(
                detail,
                r'\?\?\?|\d{2,}$|\d{2,}\sкомната'
            )
            address, detail = extract_item(
                detail,
                r'(?:(?:(?:ул\.|пл\.)\s*)?[А-Яа-я]+[\ \,\.д]*\d{2,}[А-Яа-я]?;?,?\ ?).*'
            )
            auditory.extend(one_more_attempt_auditory)
            pairs.append(
                {   
                    "year": group.get("year"),
                    "level": group.get("level"),
                    "speciality": replace_collisions(group.get("speciality"), {
                        "Направление ": "", "Специальность ": ""
                    }),
                    "group": group.get("group"),

                    **pair,
                    "detail": clear_result(detail),
                    "auditory": clear_result(" | ".join(auditory)),
                    "teacher": clear_result(" | ".join(teacher)),
                    "address": clear_result(" | ".join(address))
                }
            )
    return pairs

if __name__ == "__main__":
    from extractor import extract

    extracted_data = extract("backend/shedule.xlsx")
    with open("out.json", "w") as file:
        print("Writing...")
        file.write(json.dumps(parse(extracted_data), indent=4, ensure_ascii=False))

    