<?php
namespace App\Notifications;

use App\Models\AppraisalHistory;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class AppraisalStatusChanged extends Notification
{
    use Queueable;

    protected $appraisalHistory;

    /**
     * Create new notification.
     *
     * @param  \App\Models\AppraisalHistory  $appraisalHistory
     * @return void
     */
    public function __construct(AppraisalHistory $appraisalHistory)
    {
        $this->appraisalHistory = $appraisalHistory;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail']; 
    }

    /**
     * get notification content
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('El estado de tu tasación ha cambiado.')
                    ->line('El nuevo estado es: ' . $this->appraisalHistory->newStatus->name);
    }
}
