<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipoUsuario extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tipos_usuarios';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'created_at',
    ];


    public function users()
    {
        return $this->belongsTo(User::class, "tipo_id", "id");
    }
}
