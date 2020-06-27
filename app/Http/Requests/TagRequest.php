<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TagRequest extends FormRequest
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


    public function rules() {
        return [
            'name' => ['required', 'string', 'unique:tags', 'max:32'],
        ];
    }
    public function attributes()
    {
        return [
            'name' => 'Тег'
        ];
    }

    public function messages()
    {
        return [
            'max'  => 'Поле ":attribute" должно быть длиной не более :max',
            'unique'  => 'Поле ":attribute" должно быть уникальным'
        ];
    }
}
