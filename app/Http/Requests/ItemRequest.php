<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ItemRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules() {
        return [
            'text' => ['required', 'string', 'max:255'],
            'details' => ['required'],
//            'type' => 'in:MEMO|NOTES'
        ];
    }
    public function attributes()
    {
        return [
            'text' => 'Текст',
            'details' => 'Решение/ответ'
        ];
    }

    public function messages()
    {
        return [
            'max'  => 'Поле ":attribute" должно быть длиной не более :max',
            'required'  => 'Поле ":attribute" должно быть заполнено',
//            'type'  => 'Поле type должно быть одним из значений: (MEMO или NOTES)',
        ];
    }
}
