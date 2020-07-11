<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return  [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:2', 'confirmed'],
        ];
    }
    public function attributes()
    {
        return [
            'name' => 'Имя',
            'email' => 'Email',
            'password' => 'Пароль'
        ];
    }

    public function messages()
    {
        return [
            'max'  => 'Поле ":attribute" должно быть длиной не более :max',
            'unique'  => 'Поле ":attribute" должно быть уникальным',
            'confirmed'  => 'Поле ":attribute" должно быть подтверждено',
            'email'  => 'Поле ":attribute" должно быть корректным email-адресом'
        ];
    }
}
